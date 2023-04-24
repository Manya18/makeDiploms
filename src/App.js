import Diplom from "./DiplomPage";
import SetImage from "./ImagePage";
import useStore from "./useStore";

import '@progress/kendo-theme-default';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport } from "@progress/kendo-react-pdf";

import { useRef } from 'react';


function App() {

  const pdfExportComponent = useRef(null);

  const { diploms,setDiploms, setIndex, index, parseValuesArray} = useStore();

  let i = index;
  const handleExportWithComponent = (event) => {
    console.log("jkjk", i, parseValuesArray.length)
    if(i<parseValuesArray.length)
    {
      console.log("i", i);
      diploms[i]=pdfExportComponent.current;
      diploms[i].save();
      i++;
      setDiploms(diploms);
      console.log("diploms", diploms);
      if(i<parseValuesArray.length) setIndex(i);  
    }
  }
  
  return (
    <div className="App">
      
      <PDFExport ref={pdfExportComponent}>
        <Diplom ></Diplom>
      </PDFExport>
      <SetImage></SetImage>
      <Button onClick={handleExportWithComponent}>Добавить</Button>
    </div>
  );
}

export default App;