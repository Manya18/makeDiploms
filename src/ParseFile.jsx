import useStore from "./useStore";
import './styles/diplomPageStyles.css'
import Papa from 'papaparse'
import React from "react";
import '@progress/kendo-theme-default';

function ParseFile() {
    const {setParseValuesArray } = useStore();

    const handleFile = (event) => 
    {
      Papa.parse(event.target.files[0], {
        header: true,
        encoding: "utf-8",
        skipEmptyLines:true,
        complete: function(result) {
          const valuesArray = [];
          result.data.map((d) => {
            valuesArray.push(Object.values(d));
          })
          setParseValuesArray(valuesArray);
          console.log("valuesArray", valuesArray);
        }
      })
    }

    return (
      <div className="ParseFile">
        <label >Загрузить таблицу </label>
        <input type="file" accept='.csv' onChange={(e) => handleFile(e)}/>
      </div>
    );
  }
  
  export default ParseFile;
  