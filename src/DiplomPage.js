import useStore from "./useStore";
import './styles/diplomPageStyles.css'
import CreateField from "./createField";

function Diplom() {
  const { fields, fieldId, setFieldId, setNameImage} = useStore();

    const {nameImage } = useStore()
    return (
      <div className="diplomPage">
        <img src={`${nameImage}`}></img>

        <CreateField ></CreateField>
        <CreateField></CreateField>

      </div>
    );
  }
  
  export default Diplom;
  