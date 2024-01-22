import useStore from "../useStore";
import '../styles/diplomPageStyles.css'
import '@progress/kendo-theme-default';
import { useState } from "react";
import * as XLSX from "xlsx";

function ParseFile() {
  const {parseValuesArray, setParseValuesArray} = useStore();
    const [data, setData] = useState([]);

    const handleFileUpload = (e) => {
      const reader = new FileReader({type: "binary"});
      reader.readAsBinaryString(e.target.files[0]);
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, {type: "binary"});
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet, {type: "UTF-8"});
        parsedData.unshift({Name1:"Имя", Surname1: "Фамилия", Patronymic1:"Отчество", Class1:"Класс", Name2:"Имя", Surname2: "Фамилия", Patronymic2:"Отчество", Class2:"Класс",Name3:"Имя", Surname3: "Фамилия", Patronymic3:"Отчество", Class3:"Класс", Tutor1:"Имя Фамилия Тренер1",Tutor2: "Имя Фамилия Тренер"})
        setData(parsedData);
        setParseValuesArray(parsedData)
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
      />      
      </div>
    );
  }

  export default ParseFile;
