import React from 'react'

export default function FiltroPeliculas({setMovies,obtenerPeliculas,setLoading,loading}) {
    

    const filtrarPeliculas= async (e)=>{
        let peliculaServicio =  await obtenerPeliculas()
        let filtro = document.querySelector('#filtro').value.toLowerCase();
        let resultado = peliculaServicio.filter(function(pelicula){
          let tituloMin = pelicula.title.toLowerCase();
          return tituloMin.indexOf(filtro) >=0 
        })
        setMovies(resultado)
        setLoading(false)
      }

    return (
        <div>
            <input type="text" id="filtro" onKeyUp={filtrarPeliculas}/>
            {loading===true?<span>Loading....</span>:""}      
        </div>
    )
}
