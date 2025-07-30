
import Navbar from '../components/Navbar'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Search } from 'lucide-react';
import { useState } from 'react'
import axios from 'axios'
import {jwtDecode} from "jwt-decode"


function Startup() {

  const [filter, setfilter] = useState("")
  const [startups, setstartups] = useState([])
  const [showpage, setshowpage] = useState(false)
  

 

  const navigate = useNavigate()
// function getuser() {
//   const token=localStorage.getItem("token")
//   const payload=jwtDecode(token)
//   const Id=payload.id
//   return Id;
  
// }
 
  const fetchstartups = async () => {
    try {
      const res = await axios.get(
        filter
          ? `http://localhost:4000/api/startups?title=${filter}`
          : `http://localhost:4000/api/startups`
      );
      setstartups(res.data);
    } catch (error) {
      console.error('Error fetching startups', error);
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
    
      fetchstartups();
    }
  }, []);
  //search bar
  const handleclick = () => {
    fetchstartups();
  }
 

  

  return (
    <>
     <div className='w-screen h-screen z-0 '
     style={{ background: `linear-gradient(150.12deg, #1D1327 16.21%, #1D1327 24.76%, #1D1327 24.76%, #1D1327 34.79%, #21162D 47.85%, #241731 57.93%, #241731 57.93%)`}}
     > 
      <Navbar />
      <div className="flex items-center justify-center mt-9 ">
        <input
          type="text"
          onChange={(e) => setfilter(e.target.value)}
          placeholder="Search here..."
          className="px-4 font-bold w-[55vw] h-[5vh] shadow-2xl rounded-3xl outline-none"
        />
        <Search
          size={35}
          onClick={handleclick}
          className="ml-2 cursor-pointer text-black  "
        />
      </div>

      <div className='backdrop-blur-sm overflow-y-scroll w-auto h-auto px-10 py- mt-5 mb-5'>
      



<div className='flex items-center justify-center flex-wrap  gap-7 '>
  
        {startups.map((startup) => {
          return (
            <div className='mt-0.5  p-5 rounded-3xl w-[38vw] h-[38vh] hover:p-7 hover:shadow-2xl bg-amber-400  hover:translate-x-[5px]  transition-transform duration-300 ease-out  '>
              <div className=' text-4xl '>{startup.title}</div>
              <div className=''>{startup.description}</div>
              <strong>members:</strong>
             <div>{startup.members}</div>
             <div className='text-blue-700  cursor-pointer '
             onClick={()=>{
             showpage(true)
             bookintership(startup._id)
             
             }}
             >Apply for intrenship</div>
             </div>
          )
        })}
</div>
      </div></div>
    </>
  )
}

export default Startup