import useStore from "./useStore";
import './styles/diplomPageStyles.css'
import CreateField from "./createField";

function Diplom() {
  const { parseData, parseColumnsArray, parseValuesArray } = useStore();

  console.log("parseValuesArray", parseValuesArray);
  




  let i=0;

  parseData.map((d, i) => {
    console.log("d"+i, d[i]);
  })
    const {nameImage } = useStore()
    return (
      <div className="diplomPage">
        <img src={`${nameImage}`}></img>
        {/* `${Object.keys(parseData[0])}` */}
        {parseValuesArray.map((d, i) => (
          <CreateField value={d[i]}></CreateField>
        ))}
      </div>
    );
  }
  
  export default Diplom;
  