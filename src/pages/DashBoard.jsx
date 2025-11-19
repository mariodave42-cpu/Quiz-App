import { RiQuestionnaireLine} from "react-icons/ri";
import { FaCheck, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import ChartPerformance from "./ChartPerformance";

const DashBoard = ()=>{
    const username = localStorage.getItem("username")
    const getInitials =(name)=>{
        if (!name) return ""
        const parts = name.trim().split(" ")
        if (parts.length === 1){
            return parts[0].charAt(0).toUpperCase()
        }
        return(
          parts[0].charAt(0).toUpperCase() + 
          parts[1].charAt(0).toUpperCase() 
        )
      }
      const initials=getInitials(username)
    const Results = JSON.parse(localStorage.getItem("quizResults"))

    const total = Results.totalQuestions;
    const correct = Results.score
    const wrong = total - correct
    const accuracy = Math.round((correct / total) * 100);
const navigate = useNavigate()
    const question = ()=>{
  navigate("/questionpage")
    }
    return(
      <div className="
      w-full
      min-h-screen
      bg-[#eebc73]
      flex 
      justify-center
      items-center
      ">
      <div className="
      w-[90%]
      h-screen
      bg-[gey]
      flex
      flex-col
      justify-betw
      items-center

      ">
        <div className="w-[100%] h-[60px] bg-[aliceblu]">
           <div className="w-[60%] h-full font-[600] text-[20px] flex items-center gap-[20px]">
        <div className="h-[50px] w-[50px] bg-[#000000] text-[#75766e] rounded-[25px] flex justify-center items-center">{initials}</div>   
        <div>{username}</div> 
            </div>  
        </div>
        <hr className="bg-[ed]"/>
        <div className="w-full h-[90px] bg-[lavener] flex-col flex justify-around">
          <div className="font-[600] text-[25px]">Quiz on Maths, English, Biology, Economics, Civic</div>
          <div className="flex items-center w-[70%] gap-[60px]">
            <div className="text-[15px] font-[600]">Total Score:{correct}/{total}</div>
            <div onClick={question} className="flex w-[35%] justify-between font-[600] text-[12px] cursor-pointer md:w-[20%] lg:w-[15%] xl:w-[11%] 2xl:w-[10%]"><RiQuestionnaireLine size="17"/>20 Questions</div>
          </div>
        </div>
        <div className="
        w-[97%]
        h-[200px]
        bg-[roylblue]
        flex
        justify-center
        items-center
        mt-[20px]
        ">
            <div className="w-full h-full bg-[re] flex flex-wrap">
          {Results.userAnswers.map((answer, index) => {
    const isCorrect = answer === Results.correctAnswers[index];

    return (
      <div
        key={index}
        className="w-[22%] md:w-[15%] lg:w-[10%] flex items-center gap-2 font-semibold"
      >
        <span>{index + 1}.</span>

        {answer === "" ? (
          ""
        ) : isCorrect ? (
          <span className="text-green-600"><FaCheck color="#4caf50"/></span> 
        ) : (
          <span className="text-red-600"><FaTimes color="#f44336"/></span> 
        )}
      </div>
    );
  })}
            </div>
        </div>
        <div className="w-full h-[100px] bg-[bown] font-[600] text-[15px] flex items-center gap-[30px] md:gap-[100px] lg:gap-[400px]">
    <div className="flex justify-center items-center gap-[4px]"><FaCheck color="#4caf50"/> Correct : {correct}</div>
    <div className="flex justify-center items-center gap-[4px]"><FaTimes color="#f44336"/> Incorrect : {wrong}</div>
      </div>
      <div className="w-[98%] h-[350px] bg-[#f8eac0] rounded-[20px]"> 
      <ChartPerformance correct={correct} wrong={wrong} />
      </div>
      <div className="w-[95%] mt-5 p-4 bg-[#000000] rounded-xl shadow-md flex items-center justify-between lg:w-[50%]">
  <div>
    <h3 className="font-bold text-[30px] text-[#75766e]">Accuracy :</h3>
    <p className="text-[17px] text-[#75766e] font-[600]">Your overall performance :</p>
  </div>

  <div className="text-right flex flex-col gap-[6px] mt-[9px]">
    <p className="text-4xl font-[600] text-[#75766e]">{accuracy}%</p>
    <p className="text-[14px] text-[#75766e] font-[600]">{correct} correct out of {total}</p>
  </div>
</div>

      </div>
      </div>
    )
}
export  default DashBoard