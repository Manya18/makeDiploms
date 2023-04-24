import { create } from "zustand";

const useStore = create((set, get) => ({
    nameImage: '',
    parseValuesArray:[],
    diploms:[],
    index: 0,
    setNameImage: (a) => set((state) => ({ nameImage: a })),
    setParseValuesArray: (a) => set((state) => ({parseValuesArray: a})),
    setDiploms: (a) => set((state) => ({diploms: a})),
    setIndex: (a) => set((state) => ({ index: a })),

   }))
   
   export default useStore