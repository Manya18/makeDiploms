import { create } from "zustand";

const useStore = create((set, get) => ({
    nameImage: '',
    parseValuesArray:[],
    diploms:[],
    index: 0,
    font:'Times New Roman',
    fontSize: 20,
    textStyle: '',
    textColor: 'black',
    format: false,
    exportFileName: '',
    formatName: 'FIO',
    field: '',
    setNameImage: (a) => set((state) => ({ nameImage: a })),
    setParseValuesArray: (a) => set((state) => ({parseValuesArray: a})),
    setDiploms: (a) => set((state) => ({diploms: [...state.diploms, a]})),
    setIndex: (a) => set((state) => ({ index: a })),
    setFont: (a) => set((state) => ({ font: a })),
    setFormat: (a) => set((state) => ({ format: a })),
    setFontSize: (a) => set((state) => ({ fontSize: a })),
    setTextStyle: (a) => set((state) => ({ textStyle: a })),
    setTextColor: (a) => set((state) => ({ textColor: a })),
    setExportFileName: (a) => set((state) => ({ exportFileName: a })),
    setFormatName: (a) => set((state) => ({ formatName: a })),
    setField: (a) => set((state) => ({ field: a }))
   }))

   export default useStore;
