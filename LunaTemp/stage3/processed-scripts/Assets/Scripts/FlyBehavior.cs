using UnityEngine;

public class FlyBehavior : MonoBehaviour
{ 
    [SerializeField] private float _velocity = 1.5f;
    [SerializeField] private float _rotationSpeed = 10f;
    [SerializeField] private float _idleFloatAmplitude = 0.2f;
    [SerializeField] private float _idleFloatFrequency = 2f;

    private Rigidbody2D _rb;    
    private CapsuleCollider2D _collider;
    private Vector3 _idleStartPosition;
    private bool _isIdleFloating;
    
    private void Start()
    {
        _rb = GetComponent<Rigidbody2D>();
        _collider = GetComponent<CapsuleCollider2D>();
        _idleStartPosition = transform.position;
        _isIdleFloating = !GameManager.Instance.IsGameStarted;

        if (_isIdleFloating)
        {
            _rb.simulated = false;
        }
        _collider.isTrigger = false;
    }

    private void Update()
    {
        if (_isIdleFloating && !GameManager.Instance.IsGameStarted)
        {
            float floatOffset = Mathf.Sin(Time.unscaledTime * _idleFloatFrequency) * _idleFloatAmplitude;
            transform.position = _idleStartPosition + Vector3.up * floatOffset;
            transform.rotation = Quaternion.identity;
        }

        if (!GameManager.Instance.IsGameStarted && Input.GetMouseButtonDown(0))
        {
            GameManager.Instance.StartGame();
            _isIdleFloating = false;
            _rb.simulated = true;
            _rb.velocity = Vector2.up * _velocity;
            return;
        }

        if (GameManager.Instance.IsGameStarted && Input.GetMouseButtonDown(0))
        {
            _rb.velocity = Vector2.up * _velocity;
            GameManager.Instance.PlayFlyClip();    
        }
    }

    private void FixedUpdate()
    {
        transform.rotation = Quaternion.Lerp(transform.rotation, Quaternion.Euler(0, 0, _rb.velocity.y * _rotationSpeed), Time.fixedDeltaTime * 10f);
    }

    private void OnCollisionEnter2D(Collision2D collision)
    {
        _collider.isTrigger = true;
        GameManager.Instance.PlayHitClip();
        GameManager.Instance.PlayDieClip();
        GameManager.Instance.GameOver();
    }

}
