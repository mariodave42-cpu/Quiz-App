import { LuNotebookPen } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
const Landingpage = () => {
    const navigate =useNavigate()
    const handleClick= ()=>{
        navigate("/homepage");
    };
  return (
    <div className="w-full h-screen bg-[red] ">
        <div className="w-[100%] h-[100vh] bg-[blue] bg-gradient-to-b from-blue-800 via-blue-500 to-white min-h-screen flex justify-center items-center flex-col ">
            <LuNotebookPen size="90px" className="2xl:size-40" />
            <div className="text-[40px] text-center font-bold mb-[100px] lg:text-[60px] ">
                EduNexa
                <div className="text-[20px] lg:text-[25px] font-mono font-light">
                    Smart quizzes. Real insight. Better learning.
                </div>
                
            </div>
            <button onClick={handleClick} className="w-[150px] h-[40px] bg-[#234bbb] text-[18px] rounded-[16px] text-[white] font-semibold lg:w-[300px] ">
                Get Started
            </button>
        </div>
    </div>
  )
}

export default Landingpage