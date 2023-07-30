import { connect,useDispatch } from "react-redux"
import { filterCards, orderCards } from "../../redux/actions"
import { useState } from "react"
import Card from "../Card/Card"
import style from './Favorites.module.css'


const Favorites = ({ myFavorites }) => {
    const dispatch = useDispatch()

    const [aux, setAux] = useState(false)

    const handleOrder = (event)=>{
        dispatch(orderCards(event.target.value))
        setAux(true)
    }

    const handleFilter = (event)=>{
        dispatch(filterCards(event.target.value))
    }

    return (
        <section>
            <div>
            <h2>Mis favoritos</h2>
            <select name="" id="" onChange={handleOrder} className={style.select}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select name="" id="" onChange={handleFilter} className={style.select}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="Todos">Todos</option>
            </select>
            </div>
            <div className={style.contenedor}>
            {
                myFavorites?.map((fav) => {
                    return (

                        <Card key={fav.id}
                            id={fav.id}
                            name={fav.name}
                            status={fav.status}
                            species={fav.species}
                            gender={fav.gender}
                            image={fav.image}
                            onClose={fav.onClose}
                        />
                    )
                })
            }
            </div>

        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites) 
