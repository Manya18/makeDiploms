import { create } from "zustand";

const useStore = create((set, get) => ({
    nameImage: '',
    fieldId: '',
    fields: [],
    parseData: [],
    parseColumnsArray:[],
    parseValuesArray:[],
    setFieldI: (a) => set((state) => ({fieldId: a})),
    setFieldId: (a) => set((state) => ({fieldId: a})),
    setNameImage: (a) => set((state) => ({ nameImage: a })),
    setParseData: (a) => set((state) => ({parseData: a})),
    setParseColumnsArray: (a) => set((state) => ({parseColumnsArray: a})),
    setParsevaluesArray: (a) => set((state) => ({parseValuesArray: a})),
   }))
   
   export default useStore