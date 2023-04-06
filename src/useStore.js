import { create } from "zustand";

const useStore = create((set, get) => ({
    nameImage: '',
    fieldId: '',
    setFieldId: (a) => set((state) => ({fieldId: a})),
    setNameImage: (a) => set((state) => ({ nameImage: a })),
   }))
   
   export default useStore