import React, { useState } from 'react'
import DatosUsuario from '../DatosUsuario';

const Url="https://api-movies-users.vercel.app/movies";
const InsertarPeliculas = () => {


    const [DataPelicula, setDataPelicula] = useState({
        title:"",
        year:"",
        cover:"",
        description:"",
        duration:"",
        contentRating:"",
        source:"",
        tags:""


    })

    let capturarDatos =(e)=>{
        let pelicula = DataPelicula
        pelicula[e.target.name]= e.target.value
        setDataPelicula(pelicula)
        
    }

    let enviarPelicula = async (e)=>{
        console.log(e)
         let pelicula = await fetch(Url,{method:'POST',body: JSON.stringify(DataPelicula), headers:{
            'Content-Type': 'application/json'
          }})
        e.preventDefault();
        console.log(pelicula)
    }

    return (
        <form action="" id ="frm_insertar_pelicula" onSubmit={enviarPelicula}>
            <div>
                <label htmlFor="title">Titulo (*)</label>
                <input type="text" name="title" id="title" defaultValue={DataPelicula.title} onChange={capturarDatos} required/>
            </div>
            <div>
                <label htmlFor="year">Año (*)</label>
                <input type="number" name="year" id="year" placeholder="YYYY" min="2010" max="2020" defaultValue={DataPelicula.year}  onChange={capturarDatos} required/>
                
            </div>
            <div>
                <label htmlFor="cover">Caratura (*)</label>
                <input type="url" name="cover" id="cover" placeholder="caratura de la portada" defaultValue={DataPelicula.cover} onChange={capturarDatos} required/>
            </div>
            <div>
                <label htmlFor="description">Descripcion</label>
                <textarea name="description" id="description" cols="30" rows="10" placeholder="Descripcion de la pelicula" defaultValue={DataPelicula.description} onChange={capturarDatos}></textarea>
            </div>
            <div>
                <label htmlFor="duration">Duracion (*)</label>
                <input type="number" name="duration" id="duration" placeholder="YYYY" min="30" max="300" defaultValue={DataPelicula.duration} onChange={capturarDatos} required />
            </div>
            <div>
                <label htmlFor="contentRating">Clasificacion (*)</label>
                <select name="contentRating" id="contentRating" defaultValue={DataPelicula.contentRating} onChange={capturarDatos} required>
                    <option value="R">Restringido</option>
                    <option value="G">General</option>
                    <option value="PG">En compañia de un adulto</option>
                    <option value="PG-13">mayor a 13 años</option>
                    <option value="PG-17">mayor a 17 años</option>
                </select>
            </div>
            <div>
                <label htmlFor="source">Fuente (*)</label>
                <input type="url" name="source" id="source" defaultValue={DataPelicula.source} onChange={capturarDatos} required/>
            </div>
            <div>
                <label htmlFor="tags">Tags (*)</label>
                <input type="text" name="tags" id="tags" placeholder="cada tag debe de ir con una (,)" defaultValue={DataPelicula.tags} onChange={capturarDatos} required/>
            </div>
            <div>
                <input type="submit" value="Enviar"/>
            </div>
        </form>
    )
}

export default InsertarPeliculas
