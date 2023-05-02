import React, { useEffect, useState } from "react";

export default props =>{
    const [contador, setContador] = useState(100)
    const [status, setParOuImpar] = useState('Par')
    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') : setParOuImpar('Impar')
    })
    return(
        <div>
            <h1>{contador}, {status}</h1>
            <button onClick={() => setContador(contador + 1)}>+</button>
        </div>
    )
}