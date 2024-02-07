import Image from "next/image";
import Nav from "../component/Nav";
import { FaGithub, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
export default function Home() {
  return (
    <main className="flex max-w-screen-2xl bg-gradient-to-r from-sky-200 to-indigo-500  min-h-screen flex-col items-center justify-start">
      <Nav/>      
      <div className="bg-[url('/Pic/Card.png')] rounded-2xl mx-auto shadow-2xl flex flex-row justify-center items-center w-[400px] h-[210px] lg:w-[600px] lg:h-[300px] md:w-[500px] md:h-[250px] mt-28  ">
        <div className="text-black text-xl flex flex-col justify-center items-start   mx-4 w-[520px] lg:max-w-2xl md:max-w-xl">
          <div className="font-bold text-xl lg:text-3xl">Contact</div>
            <br />        
            <div className="text-black text-left text-sm md:text-lg">
              
              <div className="flex flex-row justify-start items-center">
                <FaLocationDot className = "md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] mr-3"/>
                <div className="flex flex-col">
                  <p>kmitl dormitory 1 Chalong Krung, 1 Alley,</p>
                  <p>LadKrabang, Bangkok 10520.</p>
                </div>
              </div>

              <div className="flex flex-row justify-start  items-center ">
                <BsTelephoneFill className = "md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] mr-3"/>
                <p>Phone Number : 097-123-3546</p>
              </div>

              <div className="flex flex-row justify-start items-center ">
                <MdEmail  className = "md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] mr-3"/>
                <p>Email : pisitpong26@gmail.com</p>
              </div>
              
              <div className="flex flex-row justify-start items-center ">
                <FaGithub  className = "md:w-[20px] md:h-[20px] lg:w-[30px] lg:h-[30px] mr-3"/>
                <p>Github :  github.com/Pisitpong26</p> 
              </div>
          </div> 
        </div>  
      </div>  
    </main>
  );
}
