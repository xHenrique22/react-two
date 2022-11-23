import React from "react";
import "./Home.css";

function Home (){
    return(
        <nav>
            <a href="#">Home</a>
            <ul>
                <li>Sobre</li>
                <li>Contato</li>
            </ul>
        </nav> 
    );
}

export { Home };