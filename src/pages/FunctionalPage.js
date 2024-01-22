import '../styles/diplomPageStyles.css'
import React, { useState } from "react";
import '@progress/kendo-theme-default';
import ReadFileImage from "../components/ReadFileImage";
import ParseFile from "../components/ParseFile";
import ChooseFormat from '../components/chooseFormat';
import useStore from '../useStore';
import { Radio, FormControl, FormLabel, RadioGroup, FormControlLabel, Box } from '@mui/material';

function FunctionalPage() {
  const [textField, setTextField] = useState('');
  const {setFontSize, setFormatName, formatName, setField } = useStore();

  const handleChange = (event) => {
    setFormatName(event.target.value)
  };
  
    return (
      <div className="imagePage">
        <ReadFileImage/>
        <ParseFile/>
        <ChooseFormat/>
        <div style={{display:'flex', flexDirection:'column'}}>
        <input type="number" value ="20" onChange={(e)=> setFontSize(e.target.value)}/>
        Создать поле
        <input type="text" onChange={(e) => {setTextField(e.target.value)}}></input>
        <button onClick={() => {setField(textField)}}>Создать</button>
        </div>
        <br/>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Формат ФИО</FormLabel>
            <RadioGroup
              name="controlled-radio-buttons-group"
              value={formatName}
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
  