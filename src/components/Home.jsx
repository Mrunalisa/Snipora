import React from "react"
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

const Home=()=>{
    const [Isbtn,setIsbtn]=useState(false);
    return (
         <div>
         <div><Hero Isbtn={Isbtn} setIsbtn={setIsbtn}/></div>
         <div>{Isbtn && <Main />}</div>
         <Outlet/>
       </div>
    )
}
export default Home;

export const Hero=({Isbtn,setIsbtn})=>{
    return (
       <div className="text-center border-b-2 border-black pb-10">

        <heading className="flex flex-col items-center mt-20">
            <h2 className="text-5xl">Save. Organize. Illuminate your code & ideas.</h2>
        </heading>
        <sub className="mt-5 flex flex-col items-center w-[60%] m-auto">
           <h3 className="text-3xl">A lightweight and elegant workspace to store, manage, and instantly access your notes and code snippets — all powered by simplicity and speed. </h3>
           <button className="bg-black text-white py-6 px-6 rounded hover:bg-gray-800 mt-6 text-[20px] cursor-pointer " onClick={()=>{setIsbtn(!Isbtn)}}>Get Started</button>
        </sub>
       
       </div>
    )
}

const Main=()=>{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        
        navigate('/paste', { 
            state: { title, content } 
        });
        
        setTitle("");
        setContent("");
    };

    return(
        <div className="mt-20 flex flex-wrap flex-col items-center">
       <div className="flex mt-10 gap-15">
         <input 
           type="text" 
           placeholder="Title" 
           required 
           className="bg-amber-50 p-2 w-[300px]" 
           value={title} 
           onChange={(e) => setTitle(e.target.value)} 
         />
        <button 
          className="bg-black text-white py-2 px-10 rounded hover:bg-gray-800 text-[16px] cursor-pointer " 
          onClick={handleSubmit}
        >
          Create Paste
        </button>
       </div>
        <textarea 
          placeholder="Your paste here..." 
          className="w-[50%] h-[300px] bg-amber-50 mt-10 p-2 resize-none" 
          required 
          value={content} 
          onChange={(e) => setContent(e.target.value)}
        />
        </div>
    )
}