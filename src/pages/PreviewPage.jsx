import useStore from "../useStore";
import '../styles/diplomPageStyles.css'
import CreateField from "../components/createField";

const PreviewPage = () => {
  const { parseValuesArray, index, nameImage, fontSize, format, setExportFileName, setIndex, field, formatName } = useStore();

  console.log("index", index);
  console.log("parseValuesArray", parseValuesArray);
  let x, y;
  if(format)
  {
    //горизонтальный
    x = '877px';
    y = '620px';
  }
  else{
    //вертикальный
    x = '620px';
    y = '876.85px';
  }
  let result=[];
  //проверка на наличие 2-го и 3-го участников команды
  if(parseValuesArray.length!==0)
  {
    console.log(index, parseValuesArray[index])
    if(parseValuesArray[index].Surname2===undefined) 
    {
      parseValuesArray[index].Surname2=' ';
      parseValuesArray[index].Name2=' '
      parseValuesArray[index].Patronymic2=' '
    }

    if(parseValuesArray[index].Surname3===undefined) 
    {
      parseValuesArray[index].Surname3=' ';
      parseValuesArray[index].Name3=' '
      parseValuesArray[index].Patronymic3=' '
    }

    //парсинг данных в соответствии с выбранным форматом имени
    console.log("kkkk", formatName)
    if(formatName==="FI")
    {
      result.push(parseValuesArray[index].Surname1 + " " + parseValuesArray[index].Name1 + '\n' +
      parseValuesArray[index].Surname2 + " " + parseValuesArray[index].Name2 + '\n' +
      parseValuesArray[index].Surname3 + " " + parseValuesArray[index].Name3)
    }
    else if(formatName==="FIO")
    {
      result.push(parseValuesArray[index].Surname1 + " " + parseValuesArray[index].Name1 + " " + parseValuesArray[index].Patronymic1 + '\n' +
      parseValuesArray[index].Surname2 + " " + parseValuesArray[index].Name2 + " " + parseValuesArray[index].Patronymic2 + '\n' +
      parseValuesArray[index].Surname3 + " " + parseValuesArray[index].Name3 + " " + parseValuesArray[index].Patronymic3);  
    }
    result.push(parseValuesArray[index].Tutor1)
    result.push(parseValuesArray[index].Tutor2)
    if(parseValuesArray[index].Team)
      result.push("Команда " + parseValuesArray[index].Team)
    result.push(field);
    console.log("result", result)
    // for (let value of parseValuesArray[index])
    // {
    //   result.push(value);
    // }
  }
  else
  {
    result.push('0');
  }
  // setIndex(index+1)
    return (
      <div className="diplomPage"
        style={{backgroundImage: `url(${nameImage})`,
        backgroundSize: 'cover',
        fontSize: `${fontSize}px`,
        backgroundPosition: 'center',
        height: y,
        width: x
        }}>
        {result.map((d) => (
          <CreateField value={d}></CreateField>
        ))}
      </div>
    );
  }

  export default PreviewPage;
