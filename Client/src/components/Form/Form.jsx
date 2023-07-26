import { useState } from "react"
import validation from "../validation/validation"

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

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" style={{ color: "white" }}>Email:</label>
                <input name="email" type="email" placeholder="Ingrese correo" value={userData.email} onChange={handleChange} />
                {errors.email ? <span style={{ color: "red" }}>{errors.email}</span> : ''}
            </div>

            <div>
                <label htmlFor="password" style={{ color: "white" }}>Password</label>
                <input name="password" type="password" placeholder="Ingrese contraseña" value={userData.password} onChange={handleChange} />
                {errors.password ? <span style={{ color: "red" }}>{errors.password}</span> : ''}

            </div>
            <button type="submit" >Enviar</button>
        </form>
    )
}

export default Form 