import { useState } from "react"
import validation from "../validation/validation"
import style from './Form.module.css'

const Form = ({ login }) => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }

    const imgUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"

    return (
        <div className={style.contenedor}>
            <form onSubmit={handleSubmit} className={style.form}>
                <img src={imgUrl} alt="" className={style.img} />
                <div className={style.divi}>
                    <label htmlFor="email" style={{ color: "white" }}>Email:</label>
                    <input name="email" type="email" placeholder="Ingrese correo" value={userData.email} onChange={handleChange} className={style.input} />
                    {errors.email ? <span style={{ color: "red" }}>{errors.email}</span> : ''}
                </div>

                <div className={style.divi}>
                    <label htmlFor="password" style={{ color: "white" }}>Password</label>
                    <input name="password" type="password" placeholder="Ingrese contraseña" value={userData.password} onChange={handleChange} className={style.input} />
                    {errors.password ? <span style={{ color: "red" }}>{errors.password}</span> : ''}

                </div>
                <button type="submit" className={style.button}>Enviar</button>
            </form>
        </div>
    )
}

export default Form 