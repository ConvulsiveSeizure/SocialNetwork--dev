import {useContext} from "react"
import { AccountContext } from "../../contexts/userdata-ctx"

export const UserPage = () => {
    
    const {userData, tokenAccount} = useContext(AccountContext)
    
    
    if (userData) {
        console.log(userData)
        return (
            <div>
                <h4>Имя пользователя: {userData.username}</h4>
                <h4>Пароль: {userData.password}</h4>
                <h4>Телефон: {userData.phoneNumber}</h4>
            </div>
        )
    } else {
        return <div></div>
    }
}