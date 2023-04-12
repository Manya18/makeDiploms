import Diplom from "./DiplomPage";
import SetImage from "./ImagePage";
import useStore from "./useStore";

import '@progress/kendo-theme-default';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport } from "@progress/kendo-react-pdf";

import { useRef } from 'react';


function App() {

  let diploms=[];
  let i=0;
  const pdfExportComponent = useRef(null);

  const handleWithComponent = (event) => {
    console.log("click", pdfExportComponent.current);
    diploms[i]=pdfExportComponent.current;
    i++;
  };

  const handleExportWithComponent = (event) => {
    console.log("fdf", diploms);
    document.getElementById('fieldStyle').style.border ='initial';
    for(let i=0; i<diploms.length; i++)
    {
      console.log("cck", diploms);
      diploms[i].save();
    }
  }


  return (
    <div className="App">
      
      <PDFExport ref={pdfExportComponent}>
        <Diplom ></Diplom>
      </PDFExport>
      <SetImage></SetImage>
      <Button onClick={handleWithComponent}>Добавить</Button>
      <Button onClick={handleExportWithComponent}>Export</Button>

    </div>
  );
}

export default App;
