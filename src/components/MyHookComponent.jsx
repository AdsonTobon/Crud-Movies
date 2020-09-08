import React, { useState } from 'react'
import { useEffect } from 'react'

export default function MyHookComponent() {
    const [nombre,setNombre]=useState("Anderson Tobon") //Mi primer Hook con useState

    const [Edad, setEdad] = useState(27)
    
    const [Estudios, setEstudios] = useState({
        estudio1: "Colegio",
        estudio2: "Tecnico",
        estudio3: "Tecnologo",
        estudio4: "Profesional"
    })
    const [Equipos, setEquipos] = useState([
        {nombre:"Bayer",categoria:"A",deporte:"Futbol"},
        {nombre:"Barcelona",categoria:"C",deporte:"Futbol"},
        {nombre:"Riber Play",categoria:"B",deporte:"Futbol"}
       
    ])
    const ItemEquipos =({nombre,categoria,deporte})=>(
                            <tr>
                                <td>{nombre}</td>
                                <td>{categoria}</td>
                                <td>{deporte}</td>
                            </tr>
    )

    let cambiarEdad=()=>{
        let suma = 1;
        setEdad (Edad + suma)
        
    }

    let CambiarNombre=()=>{
        setNombre(document.getElementById("nombre").value)
    }

    useEffect(function(){
        console.log("Ya se renderizo el DOM")
    },[Edad])

    return (
        <div>
            Mi nombre es: {nombre} <br/>
            Mi edad es:  {Edad} años <br/>
            <b>Estudios: </b><br/>
            <ol>
    <li>{Estudios.estudio1}</li>
    <li>{Estudios.estudio2}</li>
    <li>{Estudios.estudio3}</li>
    <li>{Estudios.estudio4}</li>
                
            </ol>
            <b>Equipos</b>
            <table>
                <thead>
                    <th>Nombre</th>
                    <th>Categoria</th>
                    <th>Deporte</th>
                </thead>
                <tbody>
                    {//El map se inicia con la constante que alberga el vector 
                    //.map que es la funcion que recorre todo el vector, la cual se agrega un parametro y una llave
                        Equipos.map((equipo,index) => <ItemEquipos {...equipo} key={index}/>
                            
                            )
                    }
                </tbody>
            </table>
            <button onClick={cambiarEdad}>Sumar Edad</button><br/>
            <input type="text" name="nombre" id="nombre" onKeyUp={CambiarNombre}/>
        </div>
    )
}
