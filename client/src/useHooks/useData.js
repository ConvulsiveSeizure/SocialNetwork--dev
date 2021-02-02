import { useState, useEffect} from "react"
import {useHttp} from "./useHttp"

export const useData = (isAuth) => {
   
    const [tokenAccount, setToken] = useState(null)
    const [username, setUsername] = useState(null)
    const [password, setPassword] = useState(null)

    const sendRequest = useHttp()

    useEffect(async () => {
        if (isAuth) {
            const userData = await sendRequest("/getdata", "POST", {}, {})
            setUsername(userData.username)
            setPassword(userData.password)
            setToken(true)
        }

    }, [isAuth])

    return {tokenAccount, username, password}
}