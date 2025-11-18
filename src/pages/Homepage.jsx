import { useState } from "react";
import { PiSmileyStickerFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
const Homepage = () => {
    const navigate = useNavigate();
    const [username, setUsername]= useState("")
    
    const handleClick = ()=>{
        if(!username.trim()){
            alert("Please enter a Username ");
            return;
        }
        localStorage.setItem("username:", username)
        navigate("/welcomepage")
    }
  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-white min-h-screen flex justify-center items-center flex-col">
        <div className="text-[50px] flex justify-center items-center gap-x-4 mb-[20px] font-semibold md:text-[70px] lg:text-[100px] ">
            Welcome 
            <PiSmileyStickerFill />
        </div>
        <div className="flex flex-col text-[20px] mr-[100px] gap-x-4 font-semibold mb-[50px] md:text-[25px] ">
            Please enter your username:
            <input type="text" placeholder="username"value={username} onChange={(e)=>setUsername(e.target.value)} className=" w-[130%] p-4 rounded-lg border border-grey-300 placeholder-blue-700 placeholder-opacity-100 focus:ring-2 focus:ring-blue-700 mt-[5px] "/>
        </div>
         <button onClick={handleClick} className="w-[150px] h-[40px] bg-[#234bbb] text-[18px] rounded-[16px] text-[white] font-semibold lg:w-[300px] md:w-[250px] ">
                Register
            </button>

    </div>
  )
}

export default Homepage