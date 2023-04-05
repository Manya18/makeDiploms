import { create } from "zustand";

const useStore = create((set, get) => ({
    nameImage: '',
    setNameImage: (a) => set((state) => ({ nameImage: a })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 })
   }))
   
   export default useStore