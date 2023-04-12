import React, {useState} from "react"; 
import { useDrag } from "react-use-gesture";
import { Resizable } from "re-resizable";
import useStore from "./useStore";

function CreateField() {
    const [fieldPos, setfieldPos] = useState({x: 0, y: 0});
    const[resize, setResize] = useState(0);

    const { fields, fieldId, setFieldId, setNameImage} = useStore();

    const bindfieldPos = useDrag((params) => {
        setfieldPos({
            x: params.offset[0],
            y: params.offset[1],
        });
    });
    
    return(
        <div>
            <div className="field" {...bindfieldPos()} id="fieldStyle" style={{
                position: 'relative',
                top: fieldPos.y,
                left: fieldPos.x,
                border: "2px solid teal",
                }}>
                <Resizable onResizeStop={() => {
                    setResize({
                    width: resize.width, height: resize.height});
                    }}>

                </Resizable>
            </div>
        </div>
    );
}

export default CreateField;