import Diplom from "./DiplomPage";
import SetImage from "./ImagePage";
import useStore from "./useStore";

import '@progress/kendo-theme-default';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";

import { useRef } from 'react';


function App() {

  const pdfExportComponent = useRef(null);

  const handleExportWithComponent = (event) => {
    console.log("click");
    pdfExportComponent.current.save();
  };



  return (
    <div className="App">
      <PDFExport ref={pdfExportComponent}>
        <Diplom></Diplom>
      </PDFExport>
      <SetImage></SetImage>
      <Button onClick={handleExportWithComponent}>Экспортировать</Button>
    </div>
  );
}

export default App;
