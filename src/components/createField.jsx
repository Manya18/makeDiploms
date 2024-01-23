import React, {useState} from "react";
import { useDrag } from "react-use-gesture";
import useStore from "../useStore";

const CreateField = (props) => {
    const [fieldPos, setfieldPos] = useState({x: 0, y: 0});
    const[resize, setResize] = useState(0);
    const {textColor, font} = useStore();

    console.log('textColor', textColor)
    const bindfieldPos = useDrag((params) => {
        setfieldPos({
            x: params.offset[0],
            y: params.offset[1],
        });
    });

    return(
        <div>
            <div {...bindfieldPos()} id="field" style={{
                width: '620px',
                position: 'relative',
                top: fieldPos.y,
                left: fieldPos.x,
                textAlign: 'center',
                display: 'inline-block',
                whiteSpace: 'pre',
                color: textColor,
                fontFamily: font,
                }}>
                {props.value}
            </div>
        </div>
    );
}
export default CreateField;
