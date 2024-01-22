import '../styles/diplomPageStyles.css'
import React, { useState } from "react";
import '@progress/kendo-theme-default';
import ReadFileImage from "../components/ReadFileImage";
import ParseFile from "../components/ParseFile";
import ChooseFormat from '../components/chooseFormat';
import useStore from '../useStore';
import { Radio, FormControl, FormLabel, RadioGroup, FormControlLabel } from '@mui/material';

function FunctionalPage() {
  const [formatFIO, setFormatFIO] = useState('FIO');
  const {setFontSize, setFormatName, formatName } = useStore();

  const handleChange = (event) => {
    setFormatFIO(event.target.value);
  };
  
    return (
      <div className="imagePage">
        <ReadFileImage/>
        <ParseFile/>
        <ChooseFormat/>
        <input type="number" value ="20" onChange={(e)=> setFontSize(e.target.value)}/><br/>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Формат ФИО</FormLabel>
            <RadioGroup
              name="controlled-radio-buttons-group"
              value={formatFIO}
              onChange={handleChange}
            >
              <FormControlLabel value='FIO' control={<Radio />} label="ФИО полностью" />
              <FormControlLabel value="FI" control={<Radio />} label="Фамилия Имя" />
            </RadioGroup>
        </FormControl>
      </div>
    );
  }
  
  export default FunctionalPage;
  