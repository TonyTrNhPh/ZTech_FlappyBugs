using System;
using UnityEngine;
using Random = UnityEngine.Random;

public class PipeSpawner : MonoBehaviour
{
    [SerializeField] private float _maxTime = 1.5f;
    [SerializeField] private float _heightRange = 1.5f;
    [SerializeField] private GameObject _pipePrefab;

    private float _timer;
    
    private void Update()
    {
        if (GameManager.Instance.IsGameOverState)
        {
            return;
        }
        
        if (GameManager.Instance.IsGameStarted)
        {
            if (_timer >= _maxTime)
            {
                SpawnPipe();
                _timer = 0f;
            }
            _timer += Time.deltaTime;
        }
    }

    private void SpawnPipe()
    {
        Vector3 position = transform.position + new Vector3(0, Random.Range(-_heightRange, _heightRange), 0);
        GameObject newPipe = Instantiate(_pipePrefab, position, Quaternion.identity);
        
        Destroy(newPipe, 10f);
    }

}
