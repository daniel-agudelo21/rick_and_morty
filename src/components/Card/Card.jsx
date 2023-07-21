import style from "./Card.module.css"
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/actions";
import { useEffect, useState } from "react";

const StyleSpecie = {
   display: 'inline-block',
   fontSize: '16px',
   color: 'violet',
   marginRight: '15px',
   marginTop: '-10px'
}

const StyleGender = {
   display: 'inline-block',
   fontSize: '16px',
   color: 'pink',
   marginTop: '-10px'
}

const Card = ({ id, name, status, species, gender, origin, image, onClose, removeFav, addFav, myFavorites }) => {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if (isFav) {
         setIsFav(false)
         removeFav(id)
      }
      else {
         setIsFav(true)
         addFav({ id, name, status, species, gender, image, onClose })
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (

      <div className={style.contenedor}>
         {
            isFav ? (
               <button onClick={handleFavorite}>❤️</button>
            ) : (
               <button onClick={handleFavorite}>🤍</button>
            )
         }
         <button className={style.click} onClick={() => { onClose(id) }}>X</button>
         <NavLink to={`/detail/${id}`} style={{ textDecoration: 'none', color: 'white' }} >
            <h2 className={style.name}>{name}</h2>
         </NavLink>

         <h2 className={style.status}>{status}</h2>
         <h2 style={StyleSpecie} >{species}</h2>
         <h2 style={StyleGender}>{gender}</h2>
         {/* <h2 className={style.origin} >{origin}</h2> */}
         <img src={image} alt='' className={style.img} />
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}


export default connect(mapStateToProps, mapDispatchToProps)(Card)
