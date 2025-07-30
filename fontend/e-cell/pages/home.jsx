
import Navbar from "../components/Navbar";


function Home() {
  return (
    <>
     


      <div className="flex flex-col min-h-screen w-screen bg-cover bg-center backdrop-opacity-90  items-center justify-center "
     >
         <Navbar />

       
        <div 
         style={{
    background: 'linear-gradient(12.64deg, rgba(204,207,24,0.95) 39.93%, rgba(144,146,30,0.95) 66.68%)'
  }}
        className=" transition-transform duration-300 ease-out hover:translate-y-[-10px] flex flex-col justify-center items-center p-5 w-[97vw]  rounded-2xl mt-3 shadow-2xl flex-1 h-[60vh]  ">
          <h1 className="text-6xl font-serif ">E-CELL</h1>
          <p className="text-4xl font-serif">Startup Internship Program</p>

          <p className="text-2xl tracking-wider text-2xlfont-serif text-bold">
         
            <br />
             
The Startup Internship Program (SIP) is a flagship initiative by E-Cell NIT Trichy, designed to connect emerging startups with the bright minds of NIT Trichy through meaningful internship opportunities            <br />
          </p>

        

          <p className="text-blue-900 font-serif text-2xl ">
Our goal is to empower startups with capable student interns while providing students hands-on experience in startup environments, promoting entrepreneurship, innovation, and learning by doing.          </p>
        </div>
        <div className="mt-1 bg-[linear-gradient(90.52deg,_#AA4B01_14.09%,_#441E01_71.72%)] w-screen h-20 bottom-0"></div>

       
      </div>
    </>
  );
}

export default Home;
