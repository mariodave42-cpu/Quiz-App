import React, { useState } from "react";
import quizData from "./quiz.json";

function QuestionPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(quizData.quiz.length).fill("")
  );

  const totalQuestions = quizData.quiz.length;
  const question = quizData.quiz[currentQuestion];

  const handleOptionClick = (option) => {
    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = option;
    setUserAnswers(updatedAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1)
      setCurrentQuestion(currentQuestion + 1);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const isFirst = currentQuestion === 0;
  const isLast = currentQuestion === totalQuestions - 1;

  return (
    <div className="w-[100%] min-h-[100vh] bg-[#ffffff] flex justify-center items-center">
      <div className="w-[90%] h-[90%] bg-white shadow-soft rounded-xl flex flex-col p-[10px_15px]">
        <div className="mt-[80px] flex justify-center text-[20px] font-[700] font-sans lg:text-[40px]">
          EduNexa Quiz
        </div>

        <div className="flex justify-center text-[18px] font-[600] font-sans lg:text-[30px]">
          QUESTION: {currentQuestion + 1}/{totalQuestions}
        </div>

        <div className="text-[15px] font-[500] lg:text-[23px] mt-[10px]">
          {question.question}
        </div>

        <div className="flex justify-center text-[15px] font-[500] lg:text-[23px] mb-[5px] mt-[5px]">
          OPTIONS:
        </div>

        <div className="flex flex-col">
          {question.options.map((opt, idx) => {
            const isSelected = userAnswers[currentQuestion] === opt;
            return (
              <div
                key={idx}
                onClick={() => handleOptionClick(opt)}
                className={`p-[2px_10px] w-[90%] mb-[10px] rounded-[3px] text-[15px] font-[500] lg:text-[23px] lg:p-[12px_15px] lg:rounded-[7px] cursor-pointer ${
                  isSelected
                    ? "bg-green-600 text-white"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {opt}
              </div>
            );
          })}
        </div>

        <div className="flex justify-end items-center mt-[10px]">
          {!isFirst && (
            <div
              className="mr-[15px] bg-[black] rounded-[3px] p-[5px_7px] text-[15px] font-[500] lg:text-[23px] lg:p-[10px_10px] text-[white] cursor-pointer hover:bg-gray-800"
              onClick={handlePrevious}
            >
              Previous
            </div>
          )}

          <div
            className={`mr-[10px] bg-[black] rounded-[3px] p-[5px_12px] text-[15px] text-[white] font-[500] lg:text-[23px] lg:p-[10px_14px] cursor-pointer hover:bg-gray-800`}
            onClick={handleNext}
          >
            {isLast ? "Submit" : "Next"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuestionPage;
