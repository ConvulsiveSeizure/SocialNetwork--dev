import { useCallback, useState } from "react";
import {AuthorizeContext} from "./contexts/auth-ctx"
import {renderAuthRouter} from "./router"
import { useAuthSwitcher } from "./useHooks/useAuthSwitcher";

function App() {
  
  //
  const {toggler, toggleAuthForm} = useAuthSwitcher()

  return (
    <AuthorizeContext.Provider value={{toggler, toggleAuthForm}}>
      <div className="App">
        {renderAuthRouter(false)}
      </div>
    </AuthorizeContext.Provider>
  );
}

export default App;
