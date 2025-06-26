using UnityEngine;

public class TunnelScript : MonoBehaviour
{
    public float speed = 5f;
    public float xBound = -10f;

    public GameObject upperPart;
    public GameObject lowerPart;

    void Start()
    {
        GameManager.OnGameStateChanged += HandleGameStateChanged;
    }

    void OnDestroy()
    {
        GameManager.OnGameStateChanged -= HandleGameStateChanged;
    }

    void Update()
    {
        if (GameManager.Instance.IsGamePlay())
        {
            transform.Translate(Vector3.left * speed * Time.deltaTime);
            DestroyOutBound();
        }
    }

    private void DestroyOutBound()
    {
        if (transform.position.x < xBound)
        {
            Destroy(gameObject);
        }
    }

    private void OnCollisionEnter(Collision collision)
    {
        if (collision.gameObject.CompareTag("Player"))
        {
            GameManager.Instance.UpdateGameState(GameState.GameOver);
            Destroy(collision.gameObject);
        }
    }   

    private void HandleGameStateChanged(GameState newState)
    {
        if (newState == GameState.GameOver)
        {
            // Stop moving when game is over
            enabled = false;
        }
    }
}
