import React, {useState} from "react";
import { useDrag } from "react-use-gesture";
import { Resizable } from "re-resizable";

const CreateField = (props) => {
    const [fieldPos, setfieldPos] = useState({x: 0, y: 0});
    const[resize, setResize] = useState(0);

    const bindfieldPos = useDrag((params) => {
        setfieldPos({
            x: params.offset[0],
            y: params.offset[1],
        });
    });

    return(
        <div>
            <div {...bindfieldPos()} id="field" style={{
                position: 'relative',
                top: fieldPos.y,
                left: fieldPos.x,
                display: 'inline-block',
                // border: '2px solid teal',
                whiteSpace: 'pre',
                }}>
                <Resizable onResizeStop={() => {
                    setResize({
                    width: resize.width, height: resize.height});
                    }}>
                {props.value}
                </Resizable>
            </div>
        </div>
    );
}
export default CreateField;
