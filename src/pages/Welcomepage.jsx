import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { LuNotebookPen } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import img1 from "../assets/sitting.png";
import { useNavigate } from "react-router-dom";

const Welcomepage = () => {
  const [username] = useState(() => localStorage.getItem("username"));
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/questionpage");
  };
  return (
    <div className="w-full h-screen bg-[#eebc73] flex justify-center items-center ">
      <div className=" w-[95%] h-[100%] flex items-center flex-col ">
        <div className="w-[100%] h-[10%] text-[40px] flex justify-between items-center font-bold ">
          <div className="flex justify-center items-center lg:text-[70px] 2xl:text-[70px] ">
            EduNexa{" "}
            <LuNotebookPen size="40px" className="md:size-16 lg:size-22 " />
          </div>
          <CgProfile className="md:size-24 lg:size-30 2xl:size-20" />
        </div>
        <div className="w-[100%] h-[50%] flex flex-col justify-center items-center ">
          <div className="w-[100%] h-[25%] flex flex-col justify-center items-center ">
            <div className="text-[20px] flex gap-x-2 md:text-[28px] font-mono ">
              Welcome 👋
            </div>
            <div className="text-[20px] font-bold md:text-[28px]  ">
              {" "}
              {username}!!!{" "}
            </div>
          </div>
          <div className="w-[92%] h-[70%] mt-4 flex bg-[#fff5d8] rounded-[70px] mb-8 lg:w-[70%] justify-start items-start  ">
            <div className="w-[50%] h-[100%] text-[25px] flex justify-center items-center flex-col -">
              Let's start now!
              <div className="text-center text-[15px] font-bold mb-8 mt-8 p-4">
                Play, Learn and Explore with EduNexa!
              </div>
              <button
                onClick={handleClick}
                className="w-[40px] h-[40px] rounded-[50%] bg-black text-white flex justify-center items-center animate-bounce"
              >
                <FaArrowRight />
              </button>
            </div>
            <div className="w-[50%] h-[100%] flex justify-center items-center object-contain lg:h-[100%] ">
              <img
                src={img1}
                alt="sitting illustration"
                className="lg:h-[100%] "
              />
            </div>
          </div>
        </div>
        <div className="w-[92%] h-[15%] bg-[#fff5d8] rounded-[50px] mb-[25px] text-center flex justify-center items-center text-[15px] font-semibold  md:p-9 lg:w-[70%] ">
          Small steps, big results — that’s how champions prepare. Take a quiz
          now, challenge your limits, and push yourself closer to the grades
          you’re chasing 🎯🔥. Improvement starts with your next question.
        </div>
        <div className="w-[92%] h-[15%] p-4 bg-[#fff5d8] rounded-[50px] text-center flex justify-center items-center flex-col text-[15px] font-semibold  md:p-9 lg:w-[70%] ">
          <div className="mb-[10px] text-[15px] font-bold">Why Practice?</div>
          <div>
            Practice transforms knowledge into confidence. Every quiz you take
            helps you identify weak areas, reinforces what you know, and ensures
            you’re ready for the real exam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcomepage;
