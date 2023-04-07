import Diplom from "./DiplomPage";
import SetImage from "./ImagePage";
import CreateField from "./createField";
import useStore from "./useStore";


function App() {

  const { fieldId, setFieldId} = useStore()
  return (
    <div className="App">
      <Diplom></Diplom>
      <SetImage></SetImage>
      
    </div>
  );
}

export default App;
