import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const ViewPaste = () => {
  const {id} = useParams();
  const allPastes = useSelector((state) => state.pastes.pastes);
  const paste = allPastes.filter((p) => p.id === id)[0];
  console.log(paste);

  return (
    <div className='text-[#5d2815] '>
        <div className='flex flex-row items-center justify-center gap-20 mt-20'>
          <input type="text" placeholder='Enter Title Here' value={paste.title} onChange={(e)=>setTitle(e.target.value)}  
          className='bg-white p-4 rounded-3xl w-[550px] outline-none' disabled/>
          <button className='bg-[#5d281564] text-white p-3 rounded-3xl w-[150px] text-xl ' disabled>
            Create</button>
      </div>
        <div className='mt-4 flex flex-row items-center justify-center'>
          <textarea placeholder="Enter Content Here" value={paste.content} onChange={(e)=>setContent(e.target.value)} 
          className='bg-white p-4 rounded-3xl mt-3 resize-none w-[800px] h-[200px] outline-none' disabled></textarea>
        </div>
    </div>
  )
}

export default ViewPaste