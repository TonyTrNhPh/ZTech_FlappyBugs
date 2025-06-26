using System.Collections;
using UnityEngine;
using UnityEngine.Rendering;

public class SpawnerScript : MonoBehaviour
{
    public GameObject[] obstaclePrefabs;
    public float spawnDelay = 1f;
    public float spawnInterval = 1f;
    public float spawnDistance = 10f;
    public float[] spawnHeight = {1, 1.5f, 2, 2.5f, 3, 3.5f, 4, 4.5f, 5, 5.5f, 6, 6.5f, 7, 7.5f, 8, 8.5f};
    private Coroutine spawnCoroutine;

    void Start()
    {
        GameManager.OnGameStateChanged += HandleGameStateChanged;
    }

    void OnDestroy()
    {
        GameManager.OnGameStateChanged -= HandleGameStateChanged;
        if (spawnCoroutine != null)
        {
            StopCoroutine(spawnCoroutine);
        }
    }

    private void HandleGameStateChanged(GameState newState)
    {
        switch (newState)
        {
            case GameState.PrePlay:
                // Clear existing obstacles
                foreach (Transform child in transform)
                {
                    Destroy(child.gameObject);
                }
                break;
            case GameState.Playing:
                if (spawnCoroutine == null)
                {
                    spawnCoroutine = StartCoroutine(SpawnObjectCoroutine());
                }
                break;
            case GameState.GameOver:
                if (spawnCoroutine != null)
                {
                    StopCoroutine(spawnCoroutine);
                    spawnCoroutine = null;
                }
                break;
        }
    }

    void Update()
    {
        
    }

    private IEnumerator SpawnObjectCoroutine()
    {
        yield return new WaitForSeconds(spawnDelay);

        while(GameManager.Instance.IsGamePlay())
        {
            int randomIndex = Random.Range(0, obstaclePrefabs.Length);
            float value = Random.Range(11, 80) / 10f;
            GameObject obstacle = Instantiate(obstaclePrefabs[randomIndex], new Vector3(spawnDistance, value, 0), Quaternion.identity);
            obstacle.transform.SetParent(transform);
            yield return new WaitForSeconds(spawnInterval);
        }
    }
}
