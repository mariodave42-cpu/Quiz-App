import { useState } from "react";
import img1 from "../assets/register.jpg"
import { useNavigate } from "react-router-dom";
const Homepage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleClick = () => {
    if (!username.trim()) {
      alert("Please enter a Username ");
      return;
    }
    localStorage.setItem("username", username);
    navigate("/welcomepage");
  };
  return (
    <div className="w-full h-screen bg-[#ffffff] flex justify-center items-center ">
      <div className="w-[100%] h-[100%] bg-[#ffffff] flex justify-between items-end flex-col ">
        <div className="w-[100%] h-[40%] flex justify-center items-center font-serif text-[50px] font-semibold flex-col lg:text-[100px] md:text-[70px] ">
          <div className="w-[100%] h-[40%] flex justify-center italic items-center ">
            EduNexa
          </div>
          <div className="w-[70%] h-[60%] ">
            <img src={img1} alt="Registration illustration" className="rounded-[15px] w-[100%] h-[100%] object-contain " />
          </div>
        </div>
        <div className="w-[100%] h-[60%] bg-[#f3e5bc] rounded-t-[50px] flex flex-col justify-center items-center md:flex ">
          <div className="h-[60%] bg-white/50 backdrop-blur-lg shadow-2xl rounded-2xl p-8 w-[70%] mx-auto flex flex-col text-[20px] font-semibold justify-center items-center md:w-[70%] lg:w-[50%] ">
            <div className="flex justify-start items-start w-[90%] text-[18px]  ">
              Enter your Username:
            </div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="p-4 w-[100%] rounded-[20px] placeholder:text-[grey] mt-[5px] mb-[40px] "
            />
            <button
              onClick={handleClick}
              className="bg-black text-[white] p-4 w-[150px]  rounded-[25px]"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
