import React from 'react';
import useStore from '../useStore';
import '../styles/diplomPageStyles.css';
import * as XLSX from 'xlsx';

function ParseFile() {
  const { setParseValuesArray } = useStore();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const binaryStr = event.target.result;
        const workbook = XLSX.read(binaryStr, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const parsedData = XLSX.utils.sheet_to_json(sheet, { raw: false });
        
        // Добавление заголовка в начало массива данных
        parsedData.unshift({
          Name1: 'Имя', Surname1: 'Фамилия', Patronymic1: 'Отчество', Class1: 'Класс',
          Name2: 'Имя', Surname2: 'Фамилия', Patronymic2: 'Отчество', Class2: 'Класс',
          Name3: 'Имя', Surname3: 'Фамилия', Patronymic3: 'Отчество', Class3: 'Класс',
          Tutor1: 'Имя Фамилия Тренер1', Tutor2: 'Имя Фамилия Тренер', Team: 'Название Команды'
        });

        setParseValuesArray(parsedData);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className="ParseFile">
      <label>Загрузить таблицу</label>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
      />
    </div>
  );
}

export default ParseFile;
