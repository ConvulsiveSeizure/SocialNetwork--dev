
import {AuthorizeContext} from "./contexts/auth-ctx"
import {renderAuthRouter} from "./router"
import { useAuthSwitcher } from "./useHooks/useAuthSwitcher";
import {useAuth} from "./useHooks/useAuth"
import { AccountContext } from "./contexts/userdata-ctx";
import { useData } from "./useHooks/useData";

function App() {
  
  const {token, login, logout} = useAuth()
  const {toggler, toggleLoginForm} = useAuthSwitcher()
  const {tokenAccount, username, password} = useData(!!token)

  const isAuth = !!token
  


  return (
    <AuthorizeContext.Provider value={{toggler, toggleLoginForm, login, logout}}>
      <AccountContext.Provider value={{tokenAccount, userData: {username, password}}}>
        <div className="App">
          {renderAuthRouter(isAuth)}
        </div>
      </AccountContext.Provider>
    </AuthorizeContext.Provider>
  );
}

export default App;
