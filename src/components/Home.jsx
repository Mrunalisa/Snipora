<<<<<<< HEAD
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
  const [title,setTitle]=useState("");
  const [content,setContent]=useState("");
  const [searchParams,setSearchParams]=useSearchParams();
  const pasteId=searchParams.get("pasteId");
  const dispatch=useDispatch();
  const allPastes=useSelector((state)=>state.pastes.pastes);

  useEffect(()=>{
    if(pasteId){
      const paste = allPastes.find((p) => p.id === pasteId);
        setTitle(paste.title);
        setContent(paste.content);
    }
  }, [pasteId]);
 
  function createPaste(){
    const paste={
      title:title,
      content:content,
      id:pasteId || Date.now().toString(36),
      createdAt:new Date().toISOString()
    }

    if(pasteId){
      //update
      dispatch(updateToPastes(paste));
    
    }
    else{
      //create
      dispatch(addToPastes(paste));

    }
    //after creating or updating clear the fields
    setTitle("");
    setContent("");
    setSearchParams({});

  }



  return (
    <div className='text-[#5d2815] '>
      <div className='flex flex-row items-center justify-center gap-20 mt-20'>
      <input type="text" placeholder='Enter Title Here' value={title} onChange={(e)=>setTitle(e.target.value)}  
      className='p-4 rounded-3xl w-[550px] outline-none'/>
      <button onClick={createPaste} className='bg-[#5d2815] text-white p-3 rounded-3xl w-[150px] text-xl'>
        {pasteId?"Update":"Create"}</button>
    </div>
    <div className='mt-4 flex flex-row items-center justify-center'>
      <textarea name="" id="" placeholder="Enter Content Here" value={content} onChange={(e)=>setContent(e.target.value)} 
      className='p-4 rounded-3xl mt-3 resize-none w-[800px] h-[200px] outline-none'></textarea>
    </div>
    </div>
  )
}

export default Home
=======
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
>>>>>>> d85bbff2dec2daad079d3defac003ca6e488db1b
