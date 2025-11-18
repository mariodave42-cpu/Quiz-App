import { LuNotebookPen } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/QUIZILLUSTRATION.jpg"
const Landingpage = () => {
    const navigate =useNavigate()
    const handleClick= ()=>{
        navigate("/homepage");
    };
  return (
    <div className="w-full h-screen bg-[#fff9e7] lg:bg-[#ffffff] flex justify-center items-center">
        <div className="w-full h-[70%] flex justify-center items-center relative">
            <img src={img1} alt="Quiz Illustration" className="w-[100%] h-[100%] object-contain md:object-contain" />
        <div className="absolute flex justify-center items-center flex-col">
            <LuNotebookPen size="90px" className="2xl:size-40" />
            <div className="text-[40px] text-center font-bold mb-[70px] lg:text-[60px] ">
                EduNexa
                <div className="text-[20px] w-[280px] lg:text-[25px] font-normal mt-[20px] ">
                    Smart quizzes. Real insight. Better learning.
                </div>
                
            </div>
            <button onClick={handleClick} className="w-[150px] h-[40px] bg-[black] text-[18px] rounded-[16px] text-[white] font-semibold lg:w-[300px] ">
                Get Started
            </button>
        </div>
        </div>

    </div>
  )
}

export default Landingpage