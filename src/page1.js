import useStore from "./useStore";

function Diplom() {

    const {nameImage, increment, decrement, reset } = useStore()
    return (
      <div style={{border: 1, borderColor: "black"}}>
      <img src={`${nameImage}`}></img> конец страницы
      </div>
    );
  }
  
  export default Diplom;
  