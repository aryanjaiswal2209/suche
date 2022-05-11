
import create from "zustand";

const useStore = create((set) => ({
  isSignedin: false,
  adminsignedin: false,
  setIsSignedin:(input) => set((state) => ({isSignedin:input})),
  setAdminsignedin:(input) => set((state) => ({adminsignedin:input}))
}));


export {useStore};