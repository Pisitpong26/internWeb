import Image from "next/image";
import Nav from "./component/Nav";
export default function Home() {
  return (
    <main className="flex max-w-screen-2xl bg-gradient-to-r from-sky-200 to-indigo-500  min-h-screen flex-col items-center justify-start">
      <Nav/>      
      <div className="bg-white rounded-[20px] mx-auto shadow-2xl flex flex-row justify-between   items-center w-[500px] h-[300px] lg:w-[900px] lg:h-[500px] md:w-[800px] md:h-[350px]">
        <Image src="/Pic/Welcome.png" alt="My Pic" width={320} height={400} className="rounded-l-[20px] max-w-48  md:max-w-56 lg:max-w-96"/>
        <div className="text-black text-xl flex flex-col justify-center items-center mx-4 w-[520px] lg:max-w-2xl md:max-w-xl">
          <div className="font-bold text-xl lg:text-3xl">Welcome to MyWeb</div>
            <br />        
            <div className="text-black text-center text-xs md:text-lg">
            <p> This is a website to introduce myself.</p>
            <p>You can get to know me better in terms of my skills and</p>
            <p> my project.</p>
            <p>So come get to know me by clicking</p> 
          </div> 
          <div className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-[20px] w-[120px] h-[50px] flex flex-row justify-center items-center my- hover:text-white my-4 ">
              <a href="/About" className="font-bold ">About me</a> 
            </div>
        </div>  
      </div>  
    </main>
  );
}
