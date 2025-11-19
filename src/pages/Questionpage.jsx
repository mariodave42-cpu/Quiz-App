import React, { useState } from "react";
import quizData from "./quiz.json";
import { LuNotebookPen } from "react-icons/lu";
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

  const correct = quiz.filter((q) => q.userAnswer === q.answer);
  const wrong = quiz.filter(
    (q) => q.userAnswer !== "" && q.userAnswer !== q.answer
  );
  const unanswered = quiz.filter((q) => q.userAnswer === "");

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
    <div className="w-[100%] min-h-[100vh] bg-[#eebc73] flex justify-center items-center">
      <div className="w-[90%] h-[90%] bg-[#eebc73] shadow-soft rounded-xl flex flex-col p-[10px_15px]">
        <div className="flex justify-center items-center italic font-[600] lg:text-[70px] 2xl:text-[70px] ">
          EduNexa{" "}
          <LuNotebookPen size="40px" className="md:size-16 lg:size-22 " />
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
                    ? "bg-[white] text-[#818181]"
                    : "bg-black text-[#818181] hover:bg-[#f7deb9]"
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
              className="mr-[15px] bg-[black] rounded-[7px] p-[5px_7px] text-[15px] font-[500] lg:text-[23px] lg:p-[10px_10px] text-[#818181] cursor-pointer hover:bg-[#f7deb9]"
              onClick={handlePrevious}
            >
              Previous
            </div>
          )}

          <div
            className={`mr-[10px] bg-[black] rounded-[7px] p-[5px_12px] text-[15px] text-[#818181] font-[500] lg:text-[23px] lg:p-[10px_14px] cursor-pointer hover:bg-[#f7deb9]`}
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
