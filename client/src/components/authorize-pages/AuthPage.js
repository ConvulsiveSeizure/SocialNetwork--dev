import {useContext} from 'react'
import {AuthorizeContext} from "../../contexts/auth-ctx"

//not-r
export const AuthPage = () => {
    
    /* тумблер для формы // form switcher */
    const {toggler, toggleAuthForm} = useContext(AuthorizeContext)
    const toggleForm = () => {
        toggler()
    }

    if (toggleAuthForm) {
        return (
            <div>
                <h1>Login form</h1>
                <form>
                    <input placeholder="Номер телефона" />
                    <input placeholder="Пароль" />
                    <button>Войти</button>
                </form>
                <hr />
                <button onClick={toggleForm}>Register</button>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1>Register form</h1>
                <form>
                    <input placeholder="Имя пользователя"/>
                    <input placeholder="Номер телефона" />
                    <input placeholder="Пароль" />
                    <button>Регистрация</button>
                </form>
                <hr />
                <button onClick={toggleForm}>Login</button>
            </div>
        )
    }
}