import useStore from "./useStore";
import './styles/diplomPageStyles.css'
import CreateField from "./createField";

function SetImage() {
    const { nameImage, setNameImage} = useStore()
    function readFile(e) {
        var file = e.target.files[0];
        var reader = new FileReader();
              reader.onload = (function (file) {
          return function (e) {
            var r = e.target;
            setNameImage(r.result);
          };
        })(file);
        // получает URL файла
        reader.readAsDataURL(file);
    }

    return (
      <div className="diplomPage">
        <input  
            type="file" onChange={(e)=> readFile(e)}/>
            {/* <button onClick={CreateField()}> Создать поле</button> */}
      </div>
    );
  }
  
  export default SetImage;
  