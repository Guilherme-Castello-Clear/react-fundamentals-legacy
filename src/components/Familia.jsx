import React from "react";
import { filhosComProps } from "../utils/utils";
export default props => (
    <div>
        <h1>Familia</h1>
        {filhosComProps(props)}
        {/* {React.cloneElement(props.children, 
            {sobrenome: props.sobrenome})} */}
        {/* {props.children} */}
    </div>
)