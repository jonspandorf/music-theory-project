import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import localForage from 'localforage';

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}
export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const mockUser = 'Jonathan Spandorf'

    useEffect(() => {
        let isMounted = true;

        if(isMounted) {
            // Add local forage when adding auth
            console.log(mockUser)
            setCurrentUser(mockUser)
            history.push('/dashboard')
        }       
        return () => isMounted = false;
    }, [])

    const context = {
        currentUser
    }

    return(
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    )
}