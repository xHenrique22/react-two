import React, { useState } from "react";
import './Estado.css';

export default function Estado() {
    const [num, setNum] = useState(0);

    return(
        <>
            <h1>Você clicou {num} vezes</h1>
            <button onClick={() => setNum(num + 1)}>Clique aqui</button>
        </>
    );
}