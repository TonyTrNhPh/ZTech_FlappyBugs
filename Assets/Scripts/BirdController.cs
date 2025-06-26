using UnityEngine;
using UnityEngine.UI;
using UnityEngine.InputSystem;
using TMPro;
using UnityEngine.Audio;

public class BirdController : MonoBehaviour
{
    [Header("Movement")]
    public float jumpForce = 5f;
    private Rigidbody rb;
    private AudioSource au;
    private float fixedXposition = -2f;
    private float maxHeight = 7.5f;
    private bool isMaxHeight = false;
    private float initialYPosition;
    private bool useGravity = false;

    [Header("Rotation")]
    public float maxUpRotation = 30f;
    public float maxDownRotation = -60f;
    public float rotationSpeed = 5f;
    private float targetRotation;

    public AudioClip jumpSound;
    public AudioClip gameOverSound;
    public AudioClip scoreSound;


    void Start()
    {
        rb = GetComponent<Rigidbody>();
        au = GetComponent<AudioSource>();
        initialYPosition = transform.position.y;
        GameManager.OnGameStateChanged += HandleGameStateChanged;
    }

    void OnDestroy()
    {
        GameManager.OnGameStateChanged -= HandleGameStateChanged;
    }

    void Update()
    {
        if (GameManager.Instance.IsGamePrePlay())
        {
            // Keep bird at initial position during PrePlay
            transform.position = new Vector3(fixedXposition, initialYPosition, transform.position.z);
            transform.rotation = Quaternion.Euler(20, 90, 0);
            
            // Start game on first click
            if (Mouse.current.leftButton.wasPressedThisFrame)
            {
                GameManager.Instance.UpdateGameState(GameState.Playing);
            }
        }
        else if (GameManager.Instance.IsGamePlay())
        {
            transform.position = new Vector3(fixedXposition, transform.position.y, transform.position.z);

            // Calculate target rotation based on velocity
            if (rb.linearVelocity.y > 0)
            {
                targetRotation = maxUpRotation;
            }
            else
            {
                targetRotation = maxDownRotation;
            }

            // Smoothly rotate the bird
            Quaternion targetQuaternion = Quaternion.Euler(targetRotation, 90, 0);
            transform.rotation = Quaternion.Lerp(transform.rotation, targetQuaternion, rotationSpeed * Time.deltaTime);

            if (transform.position.y >= maxHeight)
            {
                isMaxHeight = true;
            }
            else
            {
                isMaxHeight = false;
            }

            if (Mouse.current.leftButton.wasPressedThisFrame && !isMaxHeight)
            {
                Jump();
            }
        }
    }

    void Jump()
    {
        rb.linearVelocity = new Vector3(rb.linearVelocity.x, 0f, 0);
        rb.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
        au.PlayOneShot(jumpSound);
    }

    private void HandleGameStateChanged(GameState newState)
    {
        switch (newState)
        {
            case GameState.PrePlay:
                // Reset bird position and physics when returning to PrePlay
                rb.linearVelocity = Vector3.zero;
                rb.useGravity = false;
                transform.position = new Vector3(fixedXposition, initialYPosition, transform.position.z);
                break;
            case GameState.Playing:
                rb.useGravity = true;
                break;
            case GameState.GameOver:
                rb.useGravity = true;
                au.PlayOneShot(gameOverSound);
                break;
        }
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Ground"))
        {
            GameManager.Instance.UpdateGameState(GameState.GameOver);
        }
        if (collision.gameObject.CompareTag("Obstacle"))
        {
            GameManager.Instance.UpdateGameState(GameState.GameOver);
        }
    }

    private void OnTriggerEnter(Collider other)
    {
        if (other.gameObject.CompareTag("Score"))
        {
            au.PlayOneShot(scoreSound);
            GameManager.Instance.IncreaseScore(1);
            other.gameObject.SetActive(false);
        }
    }
}