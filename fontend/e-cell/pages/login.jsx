import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import bg from "../src/assets/bg.jpg";
import logo from "../src/assets/logo.png"
function Login() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [issignup,setissignup]=useState(false)

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =issignup? "http://localhost:4000/api/auth/register"
                       :"http://localhost:4000/api/auth/login";
     const data= issignup?{name,email,password} :
                {email,password}      

    try {
      const res = await axios.post(url,data );
      if(!issignup){
        const token =res.data.token
        localStorage.setItem("token",token)
         
          alert(res.data.msg)
         if(token){
          navigate("/home")
         }
      }
      if(res.data.msg== "user registered" ){
        setissignup(false)
        setEmail("")
        setName("")
        setPassword("")
        alert("signup sucessful! You can now login.")

      }
   

    }
    catch (err) {
    console.log(err)

    alert("Something went wrong");
  }
};

return (
  <>



    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <span
        className="z-4 absolute top-4 right-4 bg-cover bg-center w-[130px] h-[130px] bg-transparent inline-block"
        style={{ backgroundImage: `url(${logo})` }}
      >
      </span>
      <form
        onSubmit={handleSubmit}
        className="bg-[rgba(0,0,0,.2)] rounded-xl shadow-md w-96 px-6 py-8 backdrop-blur-sm border border-white/10"
      >
        <h2 className="text-3xl mb-6 font-bold text-center">
         {issignup?"Sign_up":"login"}
        </h2>

  {
    issignup&&(
      <input type="text" 
      value={name}
     className="w-full p-2 mb-4 bg-transparent border border-white/30 rounded "
placeholder="Name"

      onChange={(e)=>{
      setName(  e.target.value)
      }}

    />
    )
  }

        <input
          type="email"
          className="w-full p-2 mb-4 bg-transparent border border-white/30 rounded "
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          className="w-full p-2 mb-4 bg-transparent border border-white/30 rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full mt-2 bg-[rgba(72,70,202,0.7)] rounded-3xl  p-2 font-semibold hover:bg-indigo-700 transition"
        >
          {issignup?"signup":"login"}
        </button>

       <div className="flex gap-2 items-center justify-center mt-1">
         <p className="text-center ">{issignup?"alredy a user..":"New here..."}</p>
         <button 
         type="button"
          className="text-blue-900 hover:text-indigo-900 hover:text-xl "
         onClick={()=>{
          setissignup(!issignup)
         }}>{issignup?"login":"signup"}</button>
        
       </div>



      </form>
    </div></>
);
}

export default Login;
