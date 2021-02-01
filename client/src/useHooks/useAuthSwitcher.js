import { useCallback, useState } from "react";

 //r
export const useAuthSwitcher = () => {
    const [toggleAuthForm, setToggle] = useState(false)
    //
    const toggler = () => {
        toggleAuthForm ? setToggle(false) : setToggle(true)
    }
    //
    return {toggleAuthForm, toggler}
}