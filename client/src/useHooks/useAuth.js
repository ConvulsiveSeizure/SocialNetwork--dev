import { useState, useEffect, useCallback} from "react"

//r
export const useAuth = () => {

    const [token, setToken] = useState(null)

    const login = useCallback((token) => {
        localStorage.setItem("token", token)
        setToken(token)
    }, [])

    const logout = () => {
        localStorage.removeItem("token")
        setToken(null)
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
        if (token) {
            login(token)
        }
    }, [login])

    return {token, login, logout}
}