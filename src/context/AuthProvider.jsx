import React, {useState} from 'react'

const AuthContext = React.createContext({});


export const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState({});
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
