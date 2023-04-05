import { create } from "zustand";

const useStore = create((set, get) => ({
    nameImage: '',
    setNameImage: (a) => set((state) => ({ nameImage: a })),
   }))
   
   export default useStore