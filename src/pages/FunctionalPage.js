import '../styles/diplomPageStyles.css'
import React from "react";
import '@progress/kendo-theme-default';
import ReadFileImage from "../components/ReadFileImage";
import ParseFile from "../components/ParseFile";
import ChooseFormat from '../components/chooseFormat';
import useStore from '../useStore';

function FunctionalPage() {
  const {setFontSize } = useStore();
    return (
      <div className="imagePage">
        <ReadFileImage/>
        <ParseFile/>
        <ChooseFormat/>
        <input type="number" value ="20" onChange={(e)=> setFontSize(e.target.value)}/>
      </div>
    );
  }
  
  export default FunctionalPage;
  