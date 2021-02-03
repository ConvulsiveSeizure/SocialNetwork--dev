import {useContext} from "react"
import { AccountContext } from "../../contexts/userdata-ctx"

export const UserPage = () => {
    
    const {userData, tokenAccount} = useContext(AccountContext)
    
    

    return (
        <div>
            <h4>Имя пользователя: </h4>
            <h4>Пароль: </h4>
        </div>
    )
}