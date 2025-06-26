using System;
using TMPro;
using UnityEngine;
using UnityEngine.Android;
using UnityEngine.InputSystem.LowLevel;
using UnityEngine.Rendering;

public class GameManager : MonoBehaviour
{
    public static GameManager Instance;
    public GameState gameState;
    public static event Action<GameState> OnGameStateChanged;

    [Header("Game Settings")]
    private bool gameOver = false;
    private bool gamePrePlay = true;
    private bool gamePlay = false;
    private int score = 0;
    private int highScore = 0;

    [Header("UI Elements")]
    public GameObject gamePlayPanel;
    public GameObject gameOverPanel;
    public GameObject gamePrePlayPanel;
    public TextMeshProUGUI scoreText;
    public TextMeshProUGUI gameOverScoreText;
    public TextMeshProUGUI highScoreText;

    void Awake()
    {
        if (Instance == null)
        {
            Instance = this;
            transform.SetParent(null);
            DontDestroyOnLoad(gameObject);
        }
        else
        {
            Destroy(gameObject);
        }
    }

    void Start()
    {
        UpdateGameState(GameState.PrePlay);
    }

    public void UpdateGameState(GameState newState)
    {
        if (gameState == newState) return; // Prevent duplicate state changes
        
        gameState = newState;

        switch (gameState)
        {
            case GameState.PrePlay:
                HandleGamePrePlayScreen();
                break;
            case GameState.Playing:
                HandleGamePlayScreen();
                break;
            case GameState.GameOver:
                HandleGameOverScreen();
                break;
        }

        gamePrePlayPanel.SetActive(gameState == GameState.PrePlay);
        gamePlayPanel.SetActive(gameState == GameState.Playing);
        gameOverPanel.SetActive(gameState == GameState.GameOver);

        OnGameStateChanged?.Invoke(newState);
    }

    private void HandleGamePrePlayScreen()
    {
        //reset game variables
        score = 0;
        gameOver = false;
        gamePrePlay = true;
        gamePlay = false;

        //reset game objects
        GameObject[] obstacles = GameObject.FindGameObjectsWithTag("Obstacle");
        foreach (GameObject obstacle in obstacles)
        {
            Destroy(obstacle);
        }

        // Update UI
        UpdateScoreUI(score);
    }

    private void HandleGamePlayScreen()
    {
        gameOver = false;
        gamePrePlay = false;
        gamePlay = true;
        //reset score
        score = 0;
        UpdateScoreUI(score);
    }

    private void HandleGameOverScreen()
    {
        gameOver = true;
        gamePrePlay = false;
        gamePlay = false;
        //update UI
        UpdateScoreUI(score);
        gameOverScoreText.text = score.ToString();
        highScoreText.text = highScore.ToString();
    }

    public void RestartButtonPressed()
    {
        UpdateGameState(GameState.PrePlay);
    }

    public void IncreaseScore(int increment)
    {
        score += increment;
        UpdateScoreUI(score);
        // Check for high score
        if (score > highScore)
        {
            highScore = score;
        }
    }

    public void UpdateScoreUI(int score)
    {
        scoreText.text = score.ToString();
    }

    public bool IsGameOver()
    {
        return gameOver;
    }

    public bool IsGamePrePlay()
    {
        return gamePrePlay;
    }

    public bool IsGamePlay()
    {
        return gamePlay;
    }
}

public enum GameState
{
    PrePlay,
    Playing,
    GameOver
}
