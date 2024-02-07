/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Nav from "../component/Nav";

export default function Home() {
  return (
    <main className="flex max-w-screen-2xl min-h-screen bg-gradient-to-r from-sky-200 to-indigo-500 flex-col items-center justify-start">
      <Nav/>      
      <div className="bg-white rounded-[20px] mx-auto shadow-2xl flex flex-row justify-around items-center w-[450px] h-[550px] lg:w-[1000px] lg:h-[550px] md:w-[800px] md:h-[400px]">
        <div className="flex flex-col justify-center items-center w-[200px] h-[300px] lg:w-[350px] lg:h-[550px] md:w-[270px] md:h-[350px] mx-3">
            <h1 className="font-bold text-black text-xl lg:text-3xl my-4 mx-3">Information</h1>      
            <Image src="/Pic/me.jpg" alt="My Pic" width={300} height={300} className="md:max-w-40 lg:max-w-56 lg:h-80 "/>
            <div className="text-black text-center text-xs lg:text-sm mx-3 my-5">
                <p>"I like working in the Frontend Developer because I want to practice and create new things to succeed.
                    Therefore I would like to do an internship here. To gain experience and develop myself to be ready for work in the future."</p> 
            </div>
        </div>
        <div className="text-black  flex flex-col justify-around items-center mx-4 w-[520px] lg:max-w-2xl md:max-w-xl ">
          <div className="text-black text-xs lg:text-sm">
  
            <p className="font-bold">Name : Pisitpong Plongkerd</p>
            <p className="font-bold">Frontend Developer Internship</p>
            <br />
            <p className="font-bold text-xs lg:text-sm">Education</p>
            <p>Bachelor of Computer Engineering, King Mongkut's Institute of Technology Ladkrabang, May 2025 (Expected) </p>
            <p>GPA : 2.95</p>

            <p className="font-bold text-xs lg:text-sm" > Skills </p>
            <li>Knowledge of basics programming language like Python, C/C++ , Java , JavaScript.</li>
            <li>Can design UI/UX for develop website in basics.</li>
            <li>Have knowledge in website development and can use various tools for development such as HTML,CSS, JavaScript, React, Tailwindcss, TypeScript  etc.</li>
            <li>Knowledge of Responsive Web Design and the ability to use Version control to collaborate with others.</li>

            <p className="font-bold text-xs lg:text-sm" >Soft Skills </p>
            <li>Communication :  Have the ability to communicate effectively with others.</li>
            <li>Teamwork : Able to work together with others to complete tasks successfully.</li>
            <li>Adaptability : Excellent ability to adapt to changing work environments.</li>
            <li>Problem Solving : Able to solve immediate problems effectively</li>
            <li>Time Management : Have a good work-life balance.</li>
          </div> 
        </div>
        
      </div>  
    </main>
  );
}
