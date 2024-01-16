import '../styles/diplomPageStyles.css'
import React, { useState } from "react";
import '@progress/kendo-theme-default';
import ReadFileImage from "../components/ReadFileImage";
import ParseFile from "../components/ParseFile";
import ChooseFormat from '../components/chooseFormat';
import useStore from '../useStore';
import { Checkbox, FormControlLabel } from '@mui/material';

function FunctionalPage() {
  const [formatFIO, setFormatFIO] = useState(false);
  const {setFontSize, setFormatName, formatName } = useStore();
  
    return (
      <div className="imagePage">
        <ReadFileImage/>
        <ParseFile/>
        <ChooseFormat/>
        <input type="number" value ="20" onChange={(e)=> setFontSize(e.target.value)}/>
        <FormControlLabel
            control={
              <Checkbox checked={!formatFIO} onChange={() => {setFormatFIO(!formatFIO); setFormatName(formatFIO)}} name="FIO" />
            }
            label="ФИО полностью"
          />
          <FormControlLabel
            control={
              <Checkbox checked={formatFIO} onChange={() => {setFormatFIO(!formatFIO); setFormatName(formatFIO)}} name="FI" />
            }
            label="Фамилия Имя"
          />
      </div>
    );
  }
  
  export default FunctionalPage;
  