import { LuNotebookPen } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/QUIZILLUSTRATION.jpg";
const Landingpage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/homepage");
  };
  return (
    <div className="w-full h-screen overflow-hidden bg-[#ffffff] lg:bg-[#ffffff] flex justify-center items-center relative">
      <div className="w-full h-[70%] flex justify-center items-center relative">
        <img
          src={img1}
          alt="Quiz Illustration"
          className="w-[100%] h-[100%] object-cover md:object-contain lg:object-contain"
        />
        <div className="absolute flex justify-center items-center h-[60%] w-[100%] flex-col">
          <div className="text-[50px] text-[black] flex justify-between items-center flex-col  h-[90%] w-[100%] text-center font-bold mb-[70px] lg:text-[100px] ">
            EduNexa
            <div className="text-[20px] w-[100%] lg:text-[30px] font-bold mb-[80%] md:mb-[50%] lg:mb-[25%]  2xl:mb-[20%] ">
              Smart quizzes. Real insight. Better learning.
            </div>
            <button
              onClick={handleClick}
              className="w-[50%] h-[20%] p-4 bg-[black] text-[18px] rounded-[10px] text-[white] font-semibold lg:w-[300px] "
            >
              Get Started
            </button>
          </div>
        </div>
        <div className="w-[50px] h-[100px] rounded-[50%] bg-[#ffc60b] absolute left-[40px] bottom-[5px] md:bottom-[50px] lg:left-[120px] "></div>
        <div className="w-[50px] h-[50px] rounded-[50%] border-[#ffc60b] border-[2px] absolute right-[20px] bottom-[70px] md:bottom-[40px] lg:right-[140px] "></div>
        <div className="w-[200px] h-[100px] rounded-[50%] border-[#115725] border-[2px] absolute top-[2px] right-[50px] z-10 lg:right-[140px]  "></div>
        <div className="w-[150px] h-[100px] rounded-[50%] bg-[#ffc60b] absolute top-[2px] right-[10px] lg:right-[140px] "></div>
        <div className="w-[50px] h-[100px] rounded-[50%] bg-[#fff9e7] absolute top-[20px] left-[50px] lg:left-[100px] "></div>
      </div>
    </div>
  );
};

export default Landingpage;
