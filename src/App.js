import PreviewPage from "./pages/PreviewPage";
import FunctionalPage from "./pages/FunctionalPage";
import useStore from "./useStore";

import '@progress/kendo-theme-default';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport } from "@progress/kendo-react-pdf";
import "./styles/diplomPageStyles.css";
import { useRef } from 'react';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

function App() {
  const pdfExportComponent = useRef(null);

  const { setDiploms, setIndex, index, parseValuesArray} = useStore();
  let diploms=[];
  let i=0;
  // let i = index;
  const handleExportWithComponent = (e) => {
    console.log("jkjk", index, parseValuesArray.length)
    if(index<parseValuesArray.length)
    {
      // console.log("i", index, pdfExportComponent.current.props.fileName[index]);
      // diploms.push(pdfExportComponent.current);
      // setDiploms(pdfExportComponent.current);
      diploms[index]=pdfExportComponent;
      console.log("diploms", diploms);
      if(index<parseValuesArray.length) setIndex(index + 1);
    }
  }

  const handleExport = (event) => {
    for(let i=0; i< diploms.length; i++)
    {
      exportComponentAsPNG(diploms[i])
      console.log(diploms, diploms[i])
    }
  }

  return (
    <div className="App"  >
      {/* <PDFExport ref={pdfExportComponent} paperSize='A4'>  */}
      <div ref={pdfExportComponent}>
          <PreviewPage ></PreviewPage>
      </div>
      {/* </PDFExport> */}
      <div className="rightPanel">
        <FunctionalPage></FunctionalPage>
        <Button onClick={(e) => {handleExportWithComponent(e);setIndex(index + 1); }}>Предпросмотр</Button>
        {/* <Button onClick={(e) => {handleExport(e)}}>Экспортировать</Button> */}
        <Button onClick={(e) => {exportComponentAsPNG(pdfExportComponent)}}>PNG</Button> 
      </div>
      {/* <Button onClick={(e) => {handleExportWithComponent(e)}}>Предпросмотр</Button>
      <Button onClick={(e) => {handleExport(e)}}>Экспортировать</Button> */}
    </div>
  );
}

export default App;
