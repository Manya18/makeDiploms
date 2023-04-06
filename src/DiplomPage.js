import useStore from "./useStore";
import './styles/diplomPageStyles.css'

function Diplom() {

    const {nameImage } = useStore()
    return (
      <div className="diplomPage">
        <img src={`${nameImage}`}></img>
      </div>
    );
  }
  
  export default Diplom;
  