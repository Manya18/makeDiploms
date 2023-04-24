import useStore from "./useStore";
import './styles/diplomPageStyles.css'
import CreateField from "./createField";

const Diplom = () => {
  const { parseValuesArray, index } = useStore();

  console.log("index", index);

  let result=[];

  if(parseValuesArray.length!=0)
  {
    for (let value of parseValuesArray[index]) 
    {
      result.push(value);
    }
  }
  else
    result.push(0);

    const {nameImage } = useStore()
    return (
      <div className="diplomPage" style={{backgroundImage: `url(${nameImage})`,
        backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100%'}}>
        {result.map((d) => (
          <CreateField value={d}></CreateField>
        ))}
      </div>
    );
  }
  
  export default Diplom;
  