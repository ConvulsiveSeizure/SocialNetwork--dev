import {useContext} from "react"
import { AccountContext } from "../../contexts/userdata-ctx"

export const UserPage = () => {
    
    const {userData, tokenAccount} = useContext(AccountContext)

    return (
        <div>
            <h4>Имя пользователя: {userData.username}</h4>
            <h4>Пароль: {userData.password}</h4>
        </div>
    )
}