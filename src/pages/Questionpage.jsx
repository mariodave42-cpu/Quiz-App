import React, { useState } from "react";
import quizData from "./quiz.json";
import { LuNotebookPen } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const handleNext = () => {
    if (!userAnswers[currentQuestion])
      return alert("Please select an option before proceeding");

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const correctAnswers = quizData.quiz.map((q) => q.answer);
      const wrongAnswers = userAnswers.map((answer, index) => {
        return answer !== correctAnswers[index] ? answer : null;
      });

      const resultData = {
        questions: quizData.quiz.map((q) => q.question),
        userAnswers: userAnswers,
        correctAnswers: correctAnswers,
        wrongAnswers: wrongAnswers,
        totalQuestions: quizData.quiz.length,
        score: userAnswers.filter((ans, i) => ans === correctAnswers[i]).length,
      };

      localStorage.setItem("quizResults", JSON.stringify(resultData));

      navigate("/dashboard");
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) setCurrentQuestion(currentQuestion - 1);
  };

  const isFirst = currentQuestion === 0;
  const isLast = currentQuestion === totalQuestions - 1;

  return (
    <div className="w-[100%] min-h-[100vh] bg-[#fff9e7] flex justify-center items-center">
      <div className="w-[90%] h-[90%] bg-[#fff9e7] shadow-soft rounded-xl flex flex-col p-[10px_15px]">
        <div className="flex justify-center items-center italic font-[600] lg:text-[70px] 2xl:text-[70px] ">
          EduNexa{" "}
          <LuNotebookPen size="40px" className="md:size-16 lg:size-22 " />
        </div>

        <div className="flex justify-center text-[18px] font-[600] font-sans lg:text-[30px]">
          QUESTION: {currentQuestion + 1}/{totalQuestions}
        </div>

        <div className="text-[15px] font-[500] lg:text-[23px] mt-[10px] text-center">
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
                className={`
    p-[2px_10px] w-[90%] mb-[10px] rounded-[3px] text-[15px] font-[500]
    lg:text-[23px] lg:p-[12px_15px] lg:rounded-[7px]
    cursor-pointer transition-all duration-150
    ${
      isSelected
        ? "bg-white text-[#818181] hover:bg-[#eaeaea] active:bg-[#dcdcdc]"
        : "bg-black text-[#818181] hover:bg-[#2a2a2a] active:bg-[#3a3a3a]"
    }
  `}
              >
                {opt}
              </div>
            );
          })}
        </div>

        <div className="flex justify-end items-center mt-[10px]">
          {!isFirst && (
            <div
              className="mr-[15px] bg-[black] rounded-[7px] p-[5px_7px] text-[15px] font-[500] lg:text-[23px] lg:p-[10px_10px] text-[#818181] cursor-pointer hover:bg-[#f7deb9] hover:text-white"
              onClick={handlePrevious}
            >
              Previous
            </div>
          )}

          <div
            className={`
    mr-[10px] bg-black rounded-[5px] p-[5px_12px]
    text-[15px] font-[500] text-[#818181]
    lg:text-[23px] lg:p-[10px_14px]
    cursor-pointer
    hover:bg-[#f7deb9] hover:text-black
  `}
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
