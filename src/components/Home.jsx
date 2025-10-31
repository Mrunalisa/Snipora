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