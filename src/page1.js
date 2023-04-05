import useStore from "./useStore";

function Diplom() {

    const {nameImage } = useStore()
    return (
      <div>
      <img src={`${nameImage}`}></img> конец страницы
      </div>
    );
  }
  
  export default Diplom;
  