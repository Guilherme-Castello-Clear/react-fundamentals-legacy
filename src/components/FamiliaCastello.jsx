import React from "react";
import Membro from "./Membro";


export default props => (
    <div>
        <Membro nome='Sérgio' sobrenome={props.sobrenome}></Membro>
        <Membro nome='Maria' sobrenome={props.sobrenome}></Membro>
        <Membro nome='Guilherme' sobrenome={props.sobrenome}></Membro>

    </div>
)