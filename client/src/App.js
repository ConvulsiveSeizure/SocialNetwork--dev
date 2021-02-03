
import {AuthorizeContext} from "./contexts/auth-ctx"
import {renderAuthRouter} from "./router"
import { useAuthSwitcher } from "./useHooks/useAuthSwitcher";
import {useAuth} from "./useHooks/useAuth"
import { AccountContext } from "./contexts/userdata-ctx";
import { useUserData } from "./useHooks/useUserData";

function App() {
  
  const {token, login, logout} = useAuth()
  const {toggler, toggleLoginForm} = useAuthSwitcher()
  const {tokenAccount, userData} = useUserData(!!token)

  const isAuth = !!token
  


  return (
    <AuthorizeContext.Provider value={{toggler, toggleLoginForm, login, logout}}>
      <AccountContext.Provider value={{tokenAccount, userData}}>
        <div className="App">
          {renderAuthRouter(isAuth)}
        </div>
      </AccountContext.Provider>
    </AuthorizeContext.Provider>
  );
}

export default App;
