import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem('pastes')
    ? JSON.parse(localStorage.getItem('pastes'))
    : [],
}

export const pasteSlice = createSlice({
  name: 'pastes',
  initialState,
  reducers: {
    addToPastes: (state, action) => {
      const paste = action.payload;
      state.pastes.push(paste);
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('Paste Created Successfully');
    },
    updateToPastes: (state, action) => {
      const updatedPaste = action.payload;
      const index = state.pastes.findIndex((paste) => paste.id === updatedPaste.id);
      if (index !== -1) {
        state.pastes[index] = updatedPaste;
        localStorage.setItem('pastes', JSON.stringify(state.pastes));
        toast.success('Paste Updated Successfully');
      }
    },
   resetAllPastes: (state, action) => {
      state.pastes = [];
      localStorage.removeItem('pastes');
      toast.success('All Pastes Removed Successfully');
      
    },
    removeFromPastes: (state, action) => {
      const pasteId = action.payload;
      console.log(pasteId);
      const index = state.pastes.findIndex((paste) => paste.id === pasteId);
      if (index !== -1) {
        state.pastes.splice(index, 1);
      }
      localStorage.setItem('pastes', JSON.stringify(state.pastes));
      toast.success('Paste Removed Successfully');
    }
  },
})


export const { addToPastes, updateToPastes, resetAllPastes, removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer