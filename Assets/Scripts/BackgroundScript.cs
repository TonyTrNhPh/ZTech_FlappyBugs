using UnityEngine;

public class BackgroundScript : MonoBehaviour
{
    public float speed = 4f;
    public float xBound = -5f;
    public float repeatBound = 30f;

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
            RepeatOutBound();
        }
    }

    private void RepeatOutBound()
    {
        if (transform.position.x < xBound)
        {
            transform.position = new Vector3(repeatBound, transform.position.y, transform.position.z);
        }
    }

    private void HandleGameStateChanged(GameState newState)
    {
        // Reset position when game restarts
        if (newState == GameState.PrePlay)
        {
            transform.position = new Vector3(0, transform.position.y, transform.position.z);
        }
    }
}
