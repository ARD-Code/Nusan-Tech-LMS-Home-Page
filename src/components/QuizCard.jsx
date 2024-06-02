import React, { useState } from "react";
import "./QuizCard.css";

const QuizCard = () => {
  const [isQuizVisible, setIsQuizVisible] = useState(true);

  const handleSubmit = () => {
    setIsQuizVisible(false);
  };

  return (
    <>
      <div className={`quiz-card ${isQuizVisible ? "visible" : "hidden"}`}>
        <div className="quiz-card-title">
          <h2>Daily Quiz</h2>
        </div>
        <div className="quiz-card-content">
          <p>Silahkan pilih yang termasuk looping</p>
          <div className="quiz-options">
            <div className="quiz-option">
              <input type="checkbox" id="option1" />
              <label htmlFor="option1">Pilihan 1</label>
            </div>
            <div className="quiz-option">
              <input type="checkbox" id="option2" />
              <label htmlFor="option2">Pilihan 2</label>
            </div>
            <div className="quiz-option">
              <input type="checkbox" id="option3" />
              <label htmlFor="option3">Pilihan 3</label>
            </div>
            <div className="quiz-option">
              <input type="checkbox" id="option4" />
              <label htmlFor="option4">Pilihan 4</label>
            </div>
          </div>
        </div>
        <div className="quiz-card-submit">
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </>
  );
};

export default QuizCard;
