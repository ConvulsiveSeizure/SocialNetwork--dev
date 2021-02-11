import {useContext, useState} from 'react'
import {AuthorizeContext} from "../../contexts/auth-ctx"
import {useHttp} from "../../useHooks/useHttp"
import {verify, sign} from "jsonwebtoken"

//not-r
export const AuthPage = () => {
    
    /* тумблер для формы // form switcher */
    const {toggler, toggleLoginForm, login} = useContext(AuthorizeContext)
    //toggleLoginForm / true-login ; false-register

    const sendRequest = useHttp()
    const toggleForm = () => {
        toggler()
    }

    const [formLogin, setFormLogin] = useState({
        password: "", phoneNumber: ""
    })
    const [formRegister, setForm] = useState({
        username: "", password: "", phoneNumber: "",
    })


    const onFormLogChange = (e) => {
        setFormLogin({...formLogin, [e.target.name]: e.target.value})
    }

    const onFormChange = (e) => {
        setForm({...formRegister, [e.target.name]: e.target.value})
    }

    const registerOrLogin = async (e) => {
        e.preventDefault()
        if (toggleLoginForm) {
            //request "/login"
            const response = await sendRequest("/login", "POST", {}, {...formLogin})
            //const verifyToken = verify(response.token, "secretHashKey", {algorithm: "HS256"})
            //const usernameToken = sign({username: verifyToken.username}, "secretHashKey", {algorithm: "HS256"})
            login(response.token)
        } else {
            //request "/register"
            const response = await sendRequest("/register", "POST", {}, {...formRegister})
            login(response.token)
        }
    }
    

    if (toggleLoginForm) {
        return (
            <div>
                <h1>Login form</h1>
                <form>
                    <input placeholder="Номер телефона" onChange={onFormLogChange} name="phoneNumber"/>
                    <input placeholder="Пароль" onChange={onFormLogChange} name="password"/>
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
                    <input placeholder="Имя пользователя" name="username" onChange={onFormChange}/>
                    <input placeholder="Номер телефона" name="phoneNumber" onChange={onFormChange}/>
                    <input placeholder="Пароль" name="password" onChange={onFormChange}/>
                    <button onClick={registerOrLogin}>Регистрация</button>
                </form>
                <hr />
                <button onClick={toggleForm}>Login</button>
            </div>
        )
    }
}