import {useContext} from 'react'
import {AuthorizeContext} from "../../contexts/auth-ctx"
import {useHttp} from "../../useHooks/useHttp"

//not-r
export const AuthPage = () => {
    
    /* тумблер для формы // form switcher */
    const {toggler, toggleLoginForm, login} = useContext(AuthorizeContext)
    //toggleLoginForm / true-login ; false-register

    const sendRequest = useHttp()
    const toggleForm = () => {
        toggler()
    }

    const registerOrLogin = async (e) => {
        e.preventDefault()
        if (toggleLoginForm) {
            //request "/login"
            const response = await sendRequest("/login", "POST", {}, {})
            login()
        } else {
            //request "/register"
            const response = await sendRequest("/register", "POST", {}, {})
            login()
        }
    }
    

    if (toggleLoginForm) {
        return (
            <div>
                <h1>Login form</h1>
                <form>
                    <input placeholder="Номер телефона" />
                    <input placeholder="Пароль" />
                    <button onClick={registerOrLogin}>Войти</button>
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
                    <button onClick={registerOrLogin}>Регистрация</button>
                </form>
                <hr />
                <button onClick={toggleForm}>Login</button>
            </div>
        )
    }
}