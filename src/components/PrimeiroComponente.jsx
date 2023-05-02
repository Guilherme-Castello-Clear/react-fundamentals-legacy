import React from "react";

export default props => (
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.abcd}</h2>
        <h3>Legal ? {props.isLegal ? 'Sim' : 'Não'}</h3>
    </div>
)

// export default () => (
//     <h1>Primeiro Componente (Arrow)!</h1>
// )

// function primeiro(){
//     return(
//         <h1>Primeiro Componente!</h1>
//     )
// }

//export default primeiro