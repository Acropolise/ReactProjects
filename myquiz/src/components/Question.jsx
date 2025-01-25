import { useState } from "react";
import data from "../assets/questions.json"
import { useEffect } from "react";

export function Question() {
  // ------------------ Variables --------------------
  const [randomQuestion, setRandomQuestion] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const [ignoredIds, setIgnoredIds] = useState([]);
  
  // --------------- Functions ---------------------
  function getActiveQuestions() {
    return data.filter(question => !ignoredIds.includes(question.id));
  }

  function generateQuestion() {
    // Vars
    const activeQuestions = getActiveQuestions();
    let selectedQuestion;

    // Logic

    if (activeQuestions.length === 0) {
      setRandomQuestion(null);
      return;
    }

    selectedQuestion = activeQuestions[Math.floor(Math.random() * activeQuestions.length)];

    setRandomQuestion(selectedQuestion);
    setCorrectAnswer(selectedQuestion.correct);

    setIgnoredIds(prev => [...prev, selectedQuestion.id]);
  }


  function submitAnswer(btnId) {
    if(btnId === correctAnswer) {
      console.log("right");
    }
    else {
      console.log("wrong!");
    }
    generateQuestion();
  }

  // ----------------------- Logic -----------------------------

  useEffect(() => {
    generateQuestion();
  }, []);

  if(!randomQuestion) {
    return <div> There are no questions left! </div>
  }
  return (
    <div className="game-container">
      <ul>
        <li className="question">
        { randomQuestion.question  }
        </li>
        <li>
        <button className="answerBtn" id = "0" onClick={() => submitAnswer(0)}>{randomQuestion.answers[0]}</button>
        </li>
        <li>
        <button className="answerBtn" id = "1" onClick={() => submitAnswer(1)}>{randomQuestion.answers[1]}</button>
        </li>
        <li>
        <button className="answerBtn" id = "2" onClick={() => submitAnswer(2)}>{randomQuestion.answers[2]}</button>
        </li>
        <li>
        <button className="answerBtn" id = "3" onClick={() => submitAnswer(3)}>{randomQuestion.answers[3]}</button>
        </li>
      </ul>
    </div>
  )
}