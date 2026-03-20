using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;

    public bool IsGameStarted { get; private set; }
    public bool IsGameOverState { get; private set; }

    [Header("UI Settings")]
    [SerializeField] private GameObject _gameOverCanvas;
    [SerializeField] private GameObject _ingameCanvas;
    [SerializeField] private GameObject _homeCanvas;
    [SerializeField] private TextMeshProUGUI _scoreText;

    [Header("Sounds Settings")]
    [SerializeField] private AudioSource _audioSource;
    [SerializeField] private AudioClip _hitClip;   
    [SerializeField] private AudioClip _scoreClip;
    [SerializeField] private AudioClip _flyClip;
    [SerializeField] private AudioClip _dieClip;
    
    private int _currentScore = 0;

    private void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
        }
        else
        {
            Destroy(gameObject);
        }
        
        IsGameStarted = false;
        IsGameOverState = false;

        _gameOverCanvas.SetActive(false);
        _homeCanvas.SetActive(true);
        _ingameCanvas.SetActive(false);

        Time.timeScale = 1f;
    }
    private void Start()
    {
        _scoreText.text = _currentScore.ToString();
    }

    public void StartGame()
    {
        if (IsGameStarted || IsGameOverState)
        {
            return;
        }

        IsGameStarted = true;

        _gameOverCanvas.SetActive(false);
        _homeCanvas.SetActive(false);
        _ingameCanvas.SetActive(true);
        
        Time.timeScale = 1f;
    }
    
    public void GameOver()
    {
        if (!IsGameStarted || IsGameOverState)
        {
            return;
        }

        IsGameStarted = false;
        IsGameOverState = true;

        _gameOverCanvas.SetActive(true);
        _homeCanvas.SetActive(false);
        _ingameCanvas.SetActive(false);
    }
    
    public void RestartGame()
    {
        
        IsGameStarted = false;
        IsGameOverState = false;
        SceneManager.LoadScene(SceneManager.GetActiveScene().buildIndex);

        _currentScore = 0;
        _scoreText.text = _currentScore.ToString();
        
        Time.timeScale = 0f;
    }
    

    public void UpdateScore()
    {
        _currentScore++;
        _scoreText.text = _currentScore.ToString(); 
    }

    public void PlayHitClip()
    {
        _audioSource.PlayOneShot(_hitClip);
    }
    
    public void PlayFlyClip()
    {
        _audioSource.PlayOneShot(_flyClip);
    }
    
    public void PlayScoreClip()
    {
        _audioSource.PlayOneShot(_scoreClip);   
    }

    public void PlayDieClip()
    {
        _audioSource.PlayOneShot(_dieClip); 
    }
}


