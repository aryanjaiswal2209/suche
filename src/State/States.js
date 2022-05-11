
import create from "zustand";
import { devtools } from 'zustand/middleware'
const useStore = create(devtools((set) => ({
  isSignedin: false,
  adminsignedin: false,
  setIsSignedin:(input) => set((state) => ({...state,isSignedin:input})),
  setAdminsignedin:(input) => set((state) => ({...state,adminsignedin:input}))
})));

// const useStores = create(devtools(


// ))
//console.log(useStores)
export {useStore};