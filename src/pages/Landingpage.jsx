import { LuNotebookPen } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/QUIZILLUSTRATION.jpg"
const Landingpage = () => {
    const navigate =useNavigate()
    const handleClick= ()=>{
        navigate("/homepage");
    };
  return (
    <div className="w-full h-screen bg-[#ffffff] lg:bg-[#ffffff] flex justify-center items-center relative">
        <div className="w-full h-[70%] bg-[#ffffff] flex justify-center items-center relative">
            <img src={img1} alt="Quiz Illustration" className="w-[100%] h-[100%] object-cover md:object-contain lg:object-contain" />
        <div className="absolute flex justify-center items-center flex-col">
            <LuNotebookPen size="90px" className="2xl:size-40" />
            <div className="text-[40px] text-center font-bold mb-[70px] lg:text-[60px] ">
                EduNexa
                <div className="text-[20px] w-[280px] lg:text-[25px] font-bold mt-[20px] ">
                    Smart quizzes. Real insight. Better learning.
                </div>
                
            </div>
            <button onClick={handleClick} className="w-[150px] h-[40px] bg-[black] text-[18px] rounded-[16px] text-[white] font-semibold lg:w-[300px] ">
                Get Started
            </button>
        </div>
        </div>
        <div className="w-[50px] h-[100px] rounded-[50%] bg-[#ffc60b] absolute left-[40px] bottom-[90px] md:bottom-[50px] lg:left-[120px] ">

        </div>
        <div className="w-[50px] h-[50px] rounded-[50%] border-[#ffc60b] border-[2px] absolute right-[20px] bottom-[70px] md:bottom-[40px] lg:right-[140px] ">

        </div>
        <div className="w-[200px] h-[50px] rounded-[50%] bg-[#fff5d8] absolute right-[px] bottom-[100px]  ">

        </div>
        <div className="w-[200px] h-[100px] rounded-[50%] border-[#115725] border-[2px] absolute top-[30px] right-[20px] z-10 lg:right-[140px]  ">

        </div>
        <div className="w-[150px] h-[100px] rounded-[50%] bg-[#ffc60b] absolute top-[60px] right-[20px] lg:right-[140px] ">

        </div>
        <div className="w-[50px] h-[100px] rounded-[50%] bg-[#fff9e7] absolute top-[20px] left-[50px] lg:left-[170px] ">

        </div>

    </div>
  )
}

export default Landingpage