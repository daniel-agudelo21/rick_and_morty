import axios from "axios"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import style from './Detail.module.css'


const Detail = () => {
    const [character, setCharacter] = useState({})
    const { id } = useParams()

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
        <div className={style.contenedorGlobal}>
            {/* TERNARIO{
                character ? <h2>{character.name}</h2>: null
            } */}
            {/* conditional chaining */}
            <div className={style.contenedorImage}>
                <h2>{character?.name}</h2>
                <div className={style.img}>
                    <img src={character?.image} alt={character?.name} />
                </div>
            </div>
            <div className={style.contenedorText}>

                <h2>Estado: {character?.status}</h2>
                <h2>Genero: {character?.gender}</h2>
                <h2>Especie: {character?.species}</h2>
                <h2>Origen: {character?.origin?.name}</h2>
            </div>
        </div>
    )
}

export default Detail