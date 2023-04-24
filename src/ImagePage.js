import useStore from "./useStore";
import './styles/diplomPageStyles.css'
import Papa from 'papaparse'
import React from "react";
import '@progress/kendo-theme-default';

function SetImage() {
    const {setNameImage, setParseValuesArray } = useStore();

    function readFile(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
              reader.onload = (function (file) {
          return function (e) {
            var r = e.target;
            setNameImage(r.result);
          };
        })(file);
        // получает URL файла
        reader.readAsDataURL(file);
    }

    const handleFile = (event) => 
    {
      Papa.parse(event.target.files[0], {
        header: true,
        encoding: "utf-8",
        skipEmptyLines:true,
        complete: function(result) {
          const valuesArray = [];

          console.log("result", result);
          result.data.map((d) => {
            valuesArray.push(Object.values(d));
          })
          setParseValuesArray(valuesArray);

          console.log("valuesArray", valuesArray);
        }
      })
    }

    return (
      <div className="diplomPage">
        <input  
            type="file" onChange={(e)=> readFile(e)}/>
        <input type="file" accept='.csv' onChange={(e) => handleFile(e)}/>
      </div>
    );
  }
  
  export default SetImage;
  