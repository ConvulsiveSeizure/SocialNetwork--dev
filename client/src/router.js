import {Route, Switch, Redirect} from "react-router-dom"
import { AuthPage } from "./components/authorize-pages/AuthPage"
import { UserPage } from "./components/user-pages/user"

//r
export const renderAuthRouter = (isAuth) => {
    if (isAuth) {
        return (
            <Switch>
                <Route exact path="/" component={UserPage}/>
                <Redirect to="/" />
            </Switch>
        )
    } else {
        return (
            <Switch>
                <Route exact path="/auth-switcher" component={AuthPage}/>
                <Redirect to="/auth-switcher" />
            </Switch>
        )
    }
}