import useStore from "./useStore";

function Buttons() {
    const { nameImage, setNameImage, decrement, reset } = useStore()
    function readFile(e) {
        var file = e.target.files[0];  // первый элемент массива файлов	
        var reader = new FileReader();
      
        // при успешном завершении операции чтения
        reader.onload = (function (file) {
          return function (e) {
            var r = e.target;
            // получаем содержимое файла, состояние чтения, ошибки(или null)
            setNameImage(r.result);
            console.log(r.result, r.readyState, r.error);
          };
        })(file);
    
        console.log(reader.readAsDataURL(file));
    }
  
    // const useUsersStore = create<User
    // increment();
    return (
      <div className="App">
        <input  
            type="file" onChange={(e)=> readFile(e)}/>
        <button onClick={readFile}>oooo</button>
      </div>
    );
  }
  
  export default Buttons;
  