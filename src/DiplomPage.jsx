import useStore from "./useStore";
import './styles/diplomPageStyles.css'
import CreateField from "./createField";

const Diplom = () => {
  const { parseValuesArray, index, nameImage, fontSize, format } = useStore();

  console.log("index", index);
  console.log("fontSize", fontSize);
  let x, y;
  if(format)
  {
    x = '1315.5px';
    y = '930px';
  }
  else{
    y = '877px';
    x = '620px';
  }
  let result=[];

  if(parseValuesArray.length!==0)
  {
    for (let value of parseValuesArray[index])
    {
      result.push(value);
    }
  }
  else
    result.push(0);

    return (
      <div className="diplomPage"
        style={{backgroundImage: `url(${nameImage})`,
        backgroundSize: 'cover',
        fontSize: `${fontSize}px`,
        // backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: y,
        width: x}}>
        {result.map((d) => (
          <CreateField value={d}></CreateField>
        ))}
      </div>
    );
  }

  export default Diplom;
