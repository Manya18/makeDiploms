import { PDFExport } from "@progress/kendo-react-pdf";
import { useRef } from 'react';
import '@progress/kendo-theme-default';
import { Button } from "@progress/kendo-react-buttons";


function Exporter() {

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
    handleWithComponent();
    //document.getElementById("field").style.border ='initial';
    for(let i=0; i<diploms.length; i++)
    {
      console.log("cck", diploms);
      diploms[i].save();
    }
  }
  handleExportWithComponent();
}
    

export default Exporter;
  