import useStore from "../useStore";
import '../styles/diplomPageStyles.css'
import '@progress/kendo-theme-default';
import { useState } from "react";
import * as XLSX from "xlsx";

function ParseFile() {
  const {parseValuesArray, setParseValuesArray} = useStore();
    const [data, setData] = useState([]);

    const handleFileUpload = (e) => {
      const reader = new FileReader();
      reader.readAsBinaryString(e.target.files[0]);
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, {type: "binary"});
        const sheetName = workbook.SheetNames[0];
        console.log(sheetName)
        const sheet = workbook.Sheets[sheetName];
        console.log(sheet)
        const parsedData = XLSX.utils.sheet_to_json(sheet);
        setData(parsedData);
        setParseValuesArray(parsedData)
        console.log(parsedData)
      }
    }
    console.log('parsedData', data)


    return (
      <div className="ParseFile">
        <label >Загрузить таблицу </label>
        <input
      type='file'
      accept='.xlsx, .xls'
      onChange={handleFileUpload}
      />      </div>
    );
  }

  export default ParseFile;
