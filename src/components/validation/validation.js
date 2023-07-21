const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /.*\d+.*/;

const validation = (userData) => {
    const errors = {}

    if (!regexEmail.test(userData.email)) {
        errors.email = 'El email ingresado no es válido'
    }
    if (!userData.email) {
        errors.email = 'Debe ingresar un email'
    }
    if (userData.email.length > 35) {
        errors.email = 'No puede tener más de 35 caracteres'
    }
    if (!regexPassword.test(userData.password)) {
        errors.password = 'La contraseña debe tener al menos 1 número'
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = 'la contraseña tiene que tener una longitud entre 6 y 10 caracteres'
    }

    return errors
}

export default validation