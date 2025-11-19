import { RiQuestionnaireLine } from "react-icons/ri";


const DashBoard = ()=>{
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
      bg-[grey]
      flex
      flex-col
      justify-betw
      items-center

      ">
        <div className="w-[100%] h-[60px] bg-[aliceblu]">
           <div className="w-[60%] h-full font-[600] text-[20px] flex items-center gap-[20px]">
        <div className="h-[50px] w-[50px] bg-[purple] rounded-[25px] flex justify-center items-center">WD</div>   
        <div>Wiliams Daniel</div> 
            </div>  
        </div>
        <hr className="bg-[red]"/>
        <div className="w-full h-[90px] bg-[lavener] flex-col flex justify-around">
          <div className="font-[600] text-[25px]">Quiz on General Knowledge</div>
          <div className="flex items-center w-[70%] gap-[60px]">
            <div className="text-[15px] font-[600]">Total Score: 4/5</div>
            <div className="flex w-[35%] justify-between font-[600] text-[12px] md:w-[20%] lg:w-[15%] xl:w-[11%] 2xl:w-[10%]"><RiQuestionnaireLine size="17"/>20 Questions</div>
          </div>
        </div>
        <div className="
        w-[97%]
        h-[200px]
        bg-[roylblue]
        flex
        justify-center
        items-center
        ">
            <div className="w-full h-full bg-[re] flex flex-wrap">
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
        <div className="w-[19%] lg:w-[10%]">1</div>
            </div>
        </div>
        <div className="w-full h-[100px] bg-[brown] font-[600] text-[15px] flex items-center gap-[30px] md:gap-[100px] lg:gap-[400px]">
    <div>Correct - 4</div>
    <div>Incorrect - 1</div>
    <div>Skipped - 0</div>
      </div>
      <div className="w-[98%] h-[350px] bg-[aqua]"> 
      chart
      </div>
      </div>
      </div>
    )
}
export  default DashBoard