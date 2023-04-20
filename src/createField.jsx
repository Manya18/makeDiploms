import React, {useState} from "react"; 
import { useDrag } from "react-use-gesture";
import { Resizable } from "re-resizable";
import useStore from "./useStore";

// class createField extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             id: ''
//         }
//     }
const CreateField = (props) => {
    const [fieldPos, setfieldPos] = useState({x: 0, y: 0});
    const[resize, setResize] = useState(0);

    const { parseData } = useStore();

    const bindfieldPos = useDrag((params) => {
        setfieldPos({
            x: params.offset[0],
            y: params.offset[1],
        });
    });
    
    return(
        <div>
            <div className="field" {...bindfieldPos()} id={props._id} style={{
                position: 'relative',
                top: fieldPos.y,
                left: fieldPos.x,
                border: "2px solid teal",
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
// function CreateField() {
//     const [fieldPos, setfieldPos] = useState({x: 0, y: 0});
//     const[resize, setResize] = useState(0);

//     const { fields, fieldId, setFieldId, setNameImage} = useStore();

//     const bindfieldPos = useDrag((params) => {
//         setfieldPos({
//             x: params.offset[0],
//             y: params.offset[1],
//         });
//     });
    
//     return(
//         <div>
//             <div className="field" {...bindfieldPos()} id="fieldStyle" style={{
//                 position: 'relative',
//                 top: fieldPos.y,
//                 left: fieldPos.x,
//                 border: "2px solid teal",
//                 }}>
//                 <Resizable onResizeStop={() => {
//                     setResize({
//                     width: resize.width, height: resize.height});
//                     }}>

//                 </Resizable>
//             </div>
//         </div>
//     );
// }

// export default CreateField;