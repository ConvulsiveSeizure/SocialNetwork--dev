
import { useEffect, useState } from "react";

 //r
export const useAuthSwitcher = () => {
    const [toggleLoginForm, setToggle] = useState(false)
    //
    const toggler = () => {
        if (toggleLoginForm) {
            localStorage.removeItem("tog")
            setToggle(false)
        } else {
            localStorage.setItem("tog", true)
            setToggle(true)
        }
    }
    //
    useEffect(() => {
        if (localStorage.getItem("tog")) {
            toggler()
        }
    }, [])

    return {toggleLoginForm, toggler}
}