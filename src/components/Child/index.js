import React from "react"; 

function Child(props) {
    function handleClick() {
        props.callback("Info de prueba");
    }

    return <button onClick={handleClick}>Disparar callback</button>;

}

export default Child; 
