using UnityEngine;

public class LoopGround : MonoBehaviour
{
    [SerializeField] private float _speed = 1f;
    [SerializeField] private float _maxRangeX = -1f;
    
    private void Update()
    {
        if (GameManager.Instance.IsGameOverState)
        {
            return;
        }
        
        transform.position += Vector3.left * _speed * Time.deltaTime;
        if (transform.position.x < _maxRangeX)
        {
            transform.position = new Vector3(0, transform.position.y, transform.position.z);
        }
    }
}
