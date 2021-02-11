import {useContext} from "react"
import { AccountContext } from "../../contexts/userdata-ctx"
import {AuthorizeContext} from "../../contexts/auth-ctx"

export const UserPage = () => {
    
    const {userData, tokenAccount} = useContext(AccountContext)
    const {logout} = useContext(AuthorizeContext)
    
    const onLogout = () => logout()

    if (userData) {
        console.log(userData)
        return (
            <div>
                <h4>Имя пользователя: {userData.username}</h4>
                <h4>Пароль: {userData.password}</h4>
                <h4>Телефон: {userData.phone_number}</h4>
                <button onClick={onLogout}>Выйти</button>
            </div>
        )
    } else {
        return <div></div>
    }
}