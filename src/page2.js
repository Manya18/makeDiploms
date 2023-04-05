import useStore from "./useStore";

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
      <div>
        <input  
            type="file" onChange={(e)=> readFile(e)}/>
      </div>
    );
  }
  
  export default SetImage;
  