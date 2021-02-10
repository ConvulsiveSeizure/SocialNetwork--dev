import { useState, useEffect} from "react"
import {useHttp} from "./useHttp"

export const useUserData = (isAuth) => {
   
    const [tokenAccount, setToken] = useState(null)
    const [userData, setUserData] = useState(null)

    const sendRequest = useHttp()

    


    useEffect(async () => {
        if (isAuth) {
            const token = localStorage.getItem("token")
            const response = await sendRequest("/getdata", "POST", {}, {token})
            setUserData(response.userData)

        }

    }, [isAuth])

    return {tokenAccount, userData}
}