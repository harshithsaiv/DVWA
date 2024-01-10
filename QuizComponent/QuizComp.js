import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./quizstyle.css";
const QuizComp = () => {
  var Questionbank = [
    {
      Question: "What is a brute force attack in DVWA?",
      Answers: [
        {
          Answer:
            "A type of attack that exploits a vulnerability in a web application",
          isCorrect: false,
        },
        {
          Answer:
            "A type of attack that involves guessing login credentials through trial and error",
          isCorrect: true,
        },
        {
          Answer:
            "A type of attack that injects malicious code into a web application",
          isCorrect: false,
        },
        {
          Answer:
            "A type of attack that steals sensitive data from a web application",
          isCorrect: false,
        },
      ],
    },
    {
      Question: "Which page in DVWA is vulnerable to brute force attacks?",
      Answers: [
        {
          Answer: "SQL Injection page",
          isCorrect: false,
        },
        {
          Answer: "File Inclusion page",
          isCorrect: false,
        },
        {
          Answer: "Brute Force page",
          isCorrect: true,
        },
        {
          Answer: "Command Injection page",
          isCorrect: false,
        },
      ],
    },
    {
      Question: "What is the purpose of a brute force attack in DVWA?",
      Answers: [
        {
          Answer: "To gain unauthorized access to a user's account",
          isCorrect: true,
        },
        {
          Answer: "To retrieve sensitive information from a database",
          isCorrect: false,
        },
        {
          Answer: "To execute malicious code on a web server",
          isCorrect: false,
        },
        {
          Answer: "To manipulate the functionality of a web application",
          isCorrect: false,
        },
      ],
    },
    {
      Question:
        "What tool can be used to automate a brute force attack in DVWA?",
      Answers: [
        {
          Answer: "Nmap",
          isCorrect: false,
        },
        {
          Answer: "Wireshark",
          isCorrect: false,
        },
        {
          Answer: "Burp Suite",
          isCorrect: true,
        },
        {
          Answer: "Metasploit",
          isCorrect: false,
        },
      ],
    },
    {
      Question:
        "Which type of brute force attack involves trying all possible combinations of characters?",
      Answers: [
        {
          Answer: "Dictionary attack",
          isCorrect: false,
        },
        {
          Answer: "Hybrid attack",
          isCorrect: false,
        },
        {
          Answer: "Mask attack",
          isCorrect: false,
        },
        {
          Answer: "Brute force attack",
          isCorrect: true,
        },
      ],
    },
    {
      Question:
        "Which type of brute force attack involves using a predefined list of words?",
      Answers: [
        {
          Answer: "Dictionary attack",
          isCorrect: true,
        },
        {
          Answer: "Hybrid attack",
          isCorrect: false,
        },
        {
          Answer: "Mask attack",
          isCorrect: false,
        },
        {
          Answer: "Brute force attack",
          isCorrect: false,
        },
      ],
    },
    {
      Question:
        "Which type of brute force attack combines dictionary words with characters and numbers?",
      Answers: [
        {
          Answer: "Dictionary attack",
          isCorrect: false,
        },
        {
          Answer: "Hybrid attack",
          isCorrect: true,
        },
        {
          Answer: "Mask attack",
          isCorrect: false,
        },
        {
          Answer: "Brute force attack",
          isCorrect: false,
        },
      ],
    },
  ];

  // Use State Hook
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  let navigate = useNavigate();

  const handleAnswerResponse = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < Questionbank.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  };
  const handleClick = () => {
    navigate("/dashboard/user-grid");
  };

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          You have scored {score} out of {Questionbank.length}
          <>
            <button type="submit" onClick={resetQuiz}>
              Attempt Again
            </button>
            <button type="submit" onClick={handleClick}>
              Back To Attacks
            </button>
          </>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>{currentQuestion + 1}</span>/{Questionbank.length}
            </div>
            <div className="question-text">
              {Questionbank[currentQuestion].Question}
            </div>
          </div>
          <div className="answer-section">
            {Questionbank[currentQuestion].Answers.map((answer) => (
              <button onClick={() => handleAnswerResponse(answer.isCorrect)}>
                {answer.Answer}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default QuizComp;
