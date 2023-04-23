import useStore from "./useStore";
import './styles/diplomPageStyles.css'
import CreateField from "./createField";

function Diplom() {
  const { parseData, parseColumnsArray, parseValuesArray } = useStore();

  console.log("parseValuesArray", parseValuesArray);
  
  let result=[];
  // .entries(parseValuesArray[0])
  // .map(entry => ({[entry[0]]: entry[1]}));
// console.log("result", parseValuesArray[0]);
  console.log("jjj", parseValuesArray.length);

  if(parseValuesArray.length!=0)
  {
    for (let value of parseValuesArray[0]) 
    {
      result.push(value);
    }
  }
  else
    result.push(0);

    const {nameImage } = useStore()
    return (
      <div className="diplomPage">
        <img src={`${nameImage}`}></img>
        {/* `${Object.keys(parseData[0])}` */}
        {result.map((d) => (
          <CreateField value={d}></CreateField>
        ))}
      </div>
    );
  }
  
  export default Diplom;
  