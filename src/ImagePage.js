import useStore from "./useStore";
import './styles/diplomPageStyles.css'
import Papa from 'papaparse'
import React from "react";
import '@progress/kendo-theme-default';
import ReadFileImage from "./ReadFileImage";
import ParseFile from "./ParseFile";

function SetImage() {

    return (
      <div className="diplomPage">
        <ReadFileImage/>
        <ParseFile/>
      </div>
    );
  }
  
  export default SetImage;
  