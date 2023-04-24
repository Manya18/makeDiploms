import useStore from "./useStore";
import React from "react";

function ReadFileImage() {
    const {setNameImage } = useStore();

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
      <div className="ReadFileImage">
        <label>Загрузить изображение </label>
        <input type="file" onChange={(e)=> readFile(e)}/>
      </div>
    );
  }
  
  export default ReadFileImage;
  