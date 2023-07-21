import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from './Detail.module.css'


const Detail = () => {
    const [character, setCharacter] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => response.data)
            .then((data) => {
                if (data.name) {
                    setCharacter(data);
                } else {
                    alert('No hay personajes con ese ID');
                }
            });
        return setCharacter({});
    }, [id]);
    return (
        <div>
            {/* TERNARIO{
                character ? <h2>{character.name}</h2>: null
            } */}
            {/* conditional chaining */}
            <div className={style.contenedor}>
                <h2>{character?.name}</h2>
                <h2>{character?.status}</h2>
                <h2>{character?.gender}</h2>
                <h2>{character?.species}</h2>
                <h2>{character?.origin?.name}</h2>
            </div>
            <div className={style.contenedorImage}>
                <img src={character?.image} alt={character?.name}  />
            </div>
        </div>
    )
}

export default Detail