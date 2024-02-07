/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Nav from "../component/Nav";

export default function Home() {
  return (
    <main className="flex max-w-screen-2xl min-h-screen bg-gradient-to-r from-sky-200 to-indigo-500 flex-col items-center justify-start">
      <Nav/>      
      <div className="bg-white rounded-[20px] mx-auto shadow-2xl flex flex-col justify-center  items-center w-[450px] h-[550px] lg:w-[1000px] lg:h-[550px] md:w-[800px] md:h-[400px]">
        <div className="flex flex-row justify-center items-center">
          <div className="w-32 lg:w-96 md:w-64 h-1 bg-blue-500 "></div>
          <h1 className="font-bold text-black text-xl lg:text-3xl my-4 mx-3">My project</h1>    
          <div className="w-32 lg:w-96 md:w-64 h-1 bg-blue-500 "></div>
        </div>

        <div className="flex flex-row justify-center items-center  ">
          
          <div className="rounded-[20px] flex flex-col lg:flex-row justify-center items-center w-[180px] h-[300px] lg:w-[450px] lg:h-[250px] md:w-[360px] md:h-[150px] mx-3">  
              <a href="https://github.com/Pisitpong26/SofDevWeb.git" target="_blank">
                <Image src="/Pic/Travel.png" alt="My Pic" width={320} height={200} className="mx-3 md:max-w-40 md:h-24  lg:max-w-max lg:h-56 rounded-[20px] "/>
              </a>
              <div className="text-black text-left text-xs lg:text-sm mx-3 my-5">
                  <a href="https://github.com/Pisitpong26/SofDevWeb.git" target="_blank" title="View code" className="font-bold text-black text-xs lg:text-lg hover:text-purple-500">Traveler Tale</a>      
                  <p>A website that recommends tourist attractions in Tak Province And the work is divided among the team based on agile principles.</p> 
              </div>
          </div>

          <div className="rounded-[20px] flex flex-col lg:flex-row justify-center items-center w-[180px] h-[300px] lg:w-[450px] lg:h-[250px] md:w-[360px] md:h-[150px] mx-3">  
              <a href="https://github.com/Pisitpong26/WebApplication1.git" target="_blank">
                <Image src="/Pic/Food.png" alt="My Pic" width={320} height={200} className="mx-3 md:max-w-40 lg:max-w-64 lg:h-40 "/>
              </a>
              <div className="text-black text-left text-xs lg:text-sm mx-3 my-5">
                  <a href="https://github.com/Pisitpong26/WebApplication1.git" target="_blank" title="View code" className="font-bold text-black text-xs lg:text-lg hover:text-purple-500 ">Food Frenzy</a>      
                  <p>It is to create a website for order food. It consists of a login page to choose whether to order food or have food delivered. and the menu selection page for ordering food. </p> 
              </div>
          </div>

        </div> 

        <div className="flex flex-row justify-center items-center my-3">
          <div className="rounded-[20px] flex flex-row justify-center items-center w-[400px] h-[100px] lg:w-[800px] lg:h-[220px] md:w-[500px] md:h-[150px] mx-3">  
          <a href="https://github.com/Pisitpong26/GameSFML.git" target="_blank">
            <Image src="/Pic/Game.png" alt="My Pic" width={600} height={200} className="mx-3 w-40 h-28 md:max-w-64  lg:w-96 lg:h-40 "/>
          </a>
            <div className="text-black text-left text-xs lg:text-sm mx-3 my-5 w-52 h-36 lg:w-96">
                <a href="https://github.com/Pisitpong26/GameSFML.git" target="_blank" title="View code" className="font-bold text-black text-xs lg:text-lg hover:text-purple-500 ">To top of the tower</a>      
                <p> Programming Fundamental course in Year 1 which used the  SFML to do. This was a very challenging task for me because it was the first project I had started and helped me understand the basics of the C/C++ language.</p> 
                <a href="https://www.youtube.com/watch?v=CD8obON8NQg&ab_channel=PP" target="blank" className="text-blue-600 hover:text-purple-500 "> Watch my game preview </a> 
            </div>
          </div>
        </div> 
        
      </div>  
    </main>
  );
}
