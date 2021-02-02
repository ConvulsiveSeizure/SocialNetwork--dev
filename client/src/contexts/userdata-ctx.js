import {createContext} from "react"
function sample() {}


export const AccountContext = createContext({
    updateAccount: sample,
    removeAccount: sample,
    tokenAccount: false,
    userData: null

})