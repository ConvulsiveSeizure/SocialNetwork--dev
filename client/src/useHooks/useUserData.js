import { useState, useEffect} from "react"
import {useHttp} from "./useHttp"

export const useUserData = (isAuth) => {
   
    const [tokenAccount, setToken] = useState(null)
    const [userData, setUserData] = useState(null)

    const sendRequest = useHttp()

    


    useEffect(async () => {
        if (isAuth) {
            const userData = await sendRequest("/getdata", "POST", {}, {})
            setUserData(userData)
        }

    }, [isAuth])

    return {tokenAccount, userData}
}