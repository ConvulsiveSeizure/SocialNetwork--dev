import {createContext} from "react"
function sample() {}


export const AuthorizeContext = createContext({
    login: sample,
    logout: sample,
    token: false,
    toggler: sample,
    toggleLoginForm: false

})