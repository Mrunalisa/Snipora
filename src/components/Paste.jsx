<<<<<<< HEAD
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom';
import { removeFromPastes } from '../redux/pasteSlice';


const Paste = () => {
  const pastes=useSelector((state)=>state.pastes.pastes);
  const dispatch=useDispatch();
  const [searchTerm,setSearchTerm]=useState("");
  const Navigate=useNavigate();
  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  function handleDelete(pasteId){
    dispatch(removeFromPastes(pasteId));
  }
  function handleEdit(pasteId){
    Navigate(`/?pasteId=${pasteId}`);

  }

  function handleView(pasteId){
    Navigate(`/pastes/${pasteId}`);

  }
  function handleCopy(paste_content){
    navigator.clipboard.writeText(paste_content) && toast.success("Copied to clipboard!");
  }

  function handleShare(pasteId){
     const paste = pastes.find((p) => p.id === pasteId);
    if (!paste) return;


    const baseUrl = window.location.origin;
    const shareLink = `${baseUrl}/pastes/${paste.id}`;

    navigator.clipboard
      .writeText(shareLink)
      .then(() => toast.success('Share link copied to clipboard!'))
      .catch(() => toast.error('Failed to copy link!'));


  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='p-2 rounded-2xl w-[600px] mt-5 outline-none mb-20 items-center flex mx-auto block mt-10'
      />
      <div className='flex flex-col gap-4 w-[800px] mx-auto mb-20'>
      {filteredPastes.map((paste) => (
        <div className='flex flex-row place-content-between border-1 border-[#5d2815] p-4 rounded-2xl bg-[#ffffff4e] text-[#5d2815]'>
          <div key={paste.id}>
            <h2 className='text-lg font-bold text-left pb-5'>{paste.title}</h2>
            <p className='text-xm pb-3'>{paste.content}</p>
            <p className='text-xs italic text-start pb-4'>Created At: {new Date(paste.createdAt).toLocaleString()}</p>
          </div>  
          <div className='flex  flex-row gap-4 items-start fill-orange-800 text-2xl'>
                <button  onClick={() => handleEdit(paste.id)}><i class="ri-pencil-fill"></i></button>
                <button  onClick={() => handleView(paste.id)}><i class="ri-eye-fill"></i></button>
                <button  onClick={() => handleDelete(paste.id)}><i class="ri-delete-bin-fill"></i></button>
                <button  onClick={() => handleCopy(paste.content)}><i class="ri-file-copy-fill"></i></button>
                <button  onClick={() => handleShare(paste.id)}><i class="ri-share-fill"></i></button>
          </div>
        </div>
      ))
      }
      </div>

    </div>
  )
}

export default Paste
=======
import { useLocation } from "react-router-dom";

function Paste() {
  const location = useLocation();
  const pastes = location.state?.pastes || [];

  return (  
    <div>
    <h1> Pastes</h1>
   
    {pastes.map(paste => (
      <><h3>{paste.title}</h3><p>{paste.content}</p></>
    ))}
    </div>
  );

}
>>>>>>> d85bbff2dec2daad079d3defac003ca6e488db1b
