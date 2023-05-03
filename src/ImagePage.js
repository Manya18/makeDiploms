import './styles/diplomPageStyles.css'
import React from "react";
import '@progress/kendo-theme-default';
import ReadFileImage from "./ReadFileImage";
import ParseFile from "./ParseFile";
import ChooseFormat from './chooseFormat';
import useStore from './useStore';

function SetImage() {
  const {setFontSize } = useStore();
    return (
      <div className="imagePage">
        <ReadFileImage/>
        <ParseFile/>
        <ChooseFormat/>
        <input type="number" onChange={(e)=> setFontSize(e.target.value)}/>
      </div>
    );
  }
  
  export default SetImage;
  