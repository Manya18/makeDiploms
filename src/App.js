import PreviewPage from "./pages/PreviewPage";
import FunctionalPage from "./pages/FunctionalPage";
import useStore from "./useStore";

import '@progress/kendo-theme-default';
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport } from "@progress/kendo-react-pdf";
import "./styles/diplomPageStyles.css";
import { usePDF } from 'react-to-pdf';
import { useRef } from 'react';
import {PreviewA4} from "@diagoriente/react-preview-a4";


function App() {
  const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  const pdfExportComponent = useRef(null);

  const { diploms,setDiploms, setIndex, index, parseValuesArray} = useStore();

  // let i = index;
  const handleExportWithComponent = (e) => {
    console.log("jkjk", index, parseValuesArray.length)
    if(index<parseValuesArray.length)
    {
      // console.log("i", index, pdfExportComponent.current.props.fileName[index]);
      // diploms.push(pdfExportComponent.current);
      setDiploms(pdfExportComponent.current);
      // i++;
      console.log("diploms", diploms);
      if(index<parseValuesArray.length) setIndex(index + 1);
    }
  }

  const handleExport = (event) => {
    for(let i=0; i< diploms.length; i++)
    {
      diploms[i].save();
      console.log(diploms, diploms[i])
    }
  }

  return (
    <div className="App" >
      {/* <PDFExport ref={pdfExportComponent} paperSize='A4'>  */}
      <div ref={targetRef} style={{height: '876.85px', width: '620px'}}>
          <PreviewPage ></PreviewPage>
      </div>
      {/* </PDFExport> */}
      <FunctionalPage></FunctionalPage>
      <Button onClick={() => {toPDF();setIndex(index + 1); }}>Предпросмотр</Button>

      {/* <Button onClick={(e) => {handleExportWithComponent(e)}}>Предпросмотр</Button>
      <Button onClick={(e) => {handleExport(e)}}>Экспортировать</Button> */}
    </div>
  );
}

export default App;
