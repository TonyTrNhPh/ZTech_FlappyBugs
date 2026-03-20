using UnityEngine;

public class MoveBehavior : MonoBehaviour
{
    [SerializeField] private float _speed = 0.65f;

    private void Update()
    {
        if(GameManager.Instance.IsGameOverState)
        {
            return;
        }
        transform.position += Vector3.left * _speed * Time.deltaTime;

    }
    
    private void OnTriggerEnter2D(Collider2D other)
    {
        if(other.gameObject.CompareTag("Player"))
        {
            GameManager.Instance.UpdateScore();
            GameManager.Instance.PlayScoreClip(); 
        }
    }
}

