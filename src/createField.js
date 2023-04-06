import React, {useState} from "react"; 
import { useDrag } from "react-use-gesture";
import { Resizable } from "re-resizable";
import useStore from "./useStore";

function CreateField() {
    const [fieldPos, setfieldPos] = useState({x: 0, y: 0});
    const[resize, setResize] = useState(0);
    const [fieldId, setFieldId] = useStore();

    setFieldId(
    <div {...bindfieldPos()} style={{
        position: 'relative',
        top: fieldPos.y,
        left: fieldPos.x,
        }}>
        <Resizable onResizeStop={() => {
            setResize({
            width: resize.width, height: resize.height});
            }}>
         000
        </Resizable>
    </div>);

    const bindfieldPos = useDrag((params) => {
        setfieldPos({
            x: params.offset[0],
            y: params.offset[1],
        });
    });
    
    return(
        <div className="z-ind1" {...bindfieldPos()} style={{
            position: 'relative',
            top: fieldPos.y,
            left: fieldPos.x,
            }}>
            <Resizable onResizeStop={() => {
                setResize({
                width: resize.width, height: resize.height});
                }}>
             000
            </Resizable>
        </div>
    );
}

export default CreateField;