import useStore from "../useStore";
import '../styles/diplomPageStyles.css'
import CreateField from "../components/createField";

const PreviewPage = () => {
  const { parseValuesArray, index, nameImage, fontSize, format, setExportFileName, setIndex } = useStore();

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

    result.push(parseValuesArray[index].Surname1 + " " + parseValuesArray[index].Name1 + " " + parseValuesArray[index].Patronymic1 + '\n' +
    parseValuesArray[index].Surname2 + " " + parseValuesArray[index].Name2 + " " + parseValuesArray[index].Patronymic2 + '\n' +
    parseValuesArray[index].Surname3 + " " + parseValuesArray[index].Name3 + " " + parseValuesArray[index].Patronymic3)
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
