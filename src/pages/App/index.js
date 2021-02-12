import React, { useState, useEffect } from "react";  //{useState es el nombre del hook que voy a usar y estoy importando. tambien llamado ESTADO INTERNO}
import { Link } from "react-router-dom";
import Blog from "../../components/Blog";
import Child from '../../components/Child'

function App() {


  const [user, setUser] = useState({})

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const getData = await fetch("https://api.github.com/users/juanigallo");
    //con esto le estamos haciendo un fetch a la API de github. el fetch nos devuelve un string de datos asi que lo tenemos que parsear a json
    const dataToJson = await getData.json();

    setUser(dataToJson);

    console.log(dataToJson);

  }


  //de aca para arriba es hook useEffect
  
  function handleCallback(data) {
    console.log(data);
  }

  //HASTA ACA ES EL EJERCICIO DE CALLBACKS


  const [message, setMessage] = useState ("") //aca estamos definiendo el hook "useState" con 2 VALORES. el primer valor es GETTER (para leer la info del estado) y el segundo es SETTER (es para actualizar nuestro estado)
  const [counter, setCounter] = useState(0);

  function handleCounter() {
    setCounter((prevCounter) => prevCounter + 1); //este es formato arrow function
  }

  function handleClick() {
    setMessage("soy un mensaje actualizado");
  }

  function handleChange(e) {
    const{value, name} = e.target; //QUIERO ACCEDER A LA INFORMACION DE ESE ELEMENTO. POR ESO USO TARGET
    setMessage(value);  
    //console.log(name, value); //A ESTO QUIERO ACCEDER

  }





  return (
    <>

    <p>Mi nombre es: {user.name}</p>
    <p>Yo vivo en: {user.location}</p>
    <p>Mi bio es: {user.bio}</p>
    <p>Trabajo en: {user.company}</p>

    <Link to="/equipo">Ir a la pagina de equipo</Link>
    
  
    
    <div>

      <Child callback={handleCallback} />

      <Blog 
        title="Curso React en CourseIt"
        content="este es el parrafo donde contamos de que va el curso"
      />
      <Blog 
        title="otro titulo"
        content="otro contenido"
      />
      <Blog 
        title="titulo??"
        content="contenido??"
      />


      <span>Counter: {counter}</span>
      <button onClick={handleCounter}>+1</button>

    <span>el valor del estado message es: {message}</span>
      <Blog />
      <button onClick={handleClick}>Click me</button>
      <div>
        <label>Mensaje</label>
      <input type="text" name="name" onChange={handleChange} />  
      </div>
    </div>
    </>
  );
}

export default App;

//y si quiero importar una imagen de internet, solo pongo el link dentro de src de este codigo 