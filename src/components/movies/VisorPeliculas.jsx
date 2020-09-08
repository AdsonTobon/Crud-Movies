import React, { useState, useEffect } from "react";
import FiltroPeliculas from './FiltroPeliculas';
import DatosUsuario from '../DatosUsuario';

export default function VisorPeliculas() {

  const [Movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(function() {

   async function obtenerPeliculasIniciales(){
     let peliculas= await obtenerPeliculas()
     setMovies(peliculas)
     setLoading(false)
   }
   obtenerPeliculasIniciales()
    
  },[])
  
 
  const nombres =["oscar","david","juan","astrid","anderson","carlos","manuela"]

  const obtenerPeliculas = async()=>{
    setLoading(true)
    let respuesta = await fetch("https://api-movies-users.vercel.app/movies")
    let peliculas = await respuesta.json()
    return peliculas
  }

  

  return (
    <div>
      <FiltroPeliculas
        obtenerPeliculas={obtenerPeliculas}
        setMovies={setMovies}
        loading={loading}
        setLoading={setLoading}
      />
      <table border="1">
        <thead >
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Year</th>
            <th>Cover</th>
            <th>Description</th>
            <th>Duration</th>
            <th>ContentRating</th>
            <th>Source</th>
            <th>Tags</th>
          </tr>
        </thead>
        <tbody>
          {
          Movies.map((pelicula, i) => {
           
            return<tr key={i}>
             <td>{pelicula.id}</td>
                            <td>{pelicula.title}</td>
                            <td>{pelicula.year}</td>
                            <td><img src={pelicula.cover} alt={pelicula.title}/></td>
                            <td>{pelicula.description}</td>
                            <td>{pelicula.duration}</td>
                            <td>{pelicula.contentRating}</td>
                            <td><a href={pelicula.source} rel="noopener noreferrer">enlace</a></td>
                            <td><ul>
                                  {pelicula.tags.map((tag,index)=><li key={index}>{tag}</li>)}
                            </ul></td>
            </tr>
          })}
        </tbody>
      </table>
      <DatosUsuario.Consumer>
        {
          usuario => <div>
            <p>Nombre de usuario: {usuario.UserName}</p>
          </div>
        }
      </DatosUsuario.Consumer>
    </div>
  );
}
