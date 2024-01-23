import { ButtonGroup } from "@progress/kendo-react-buttons";
import React, {useState} from "react";
import useStore from "../useStore";


const ChooseFormat = () => {
const {setFormat} = useStore();

    return(
        <div className="formatButtons">
          <label> Формат изображения
          <ButtonGroup>
            <button onClick={() => setFormat(true)}>Горизонтально</button>
            <button onClick={() => setFormat(false)}>Вертикально</button>
          </ButtonGroup>
          </label>
        </div>
    );
}
export default ChooseFormat;
