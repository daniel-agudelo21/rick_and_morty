import SearchBar from '../SearchBar/SearchBar'
import { NavLink } from 'react-router-dom'
import style from './Nav.module.css'

const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
const Nav = ({ onSearch }) => {
    return (
        <nav>
            <div className={style.logo}>
                <img src={imgUrl} alt="" className={style.img} />
            </div>
            <div className={style.nav}>
                <ul>
                    <li>
                        <NavLink to='/about' className={style.botones}>About</NavLink>
                    </li>
                    <li>
                        <NavLink to='/home' className={style.botones}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/favorites' className={style.botones}>Favoritos</NavLink>
                    </li>
                </ul>
                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    )
}

export default Nav