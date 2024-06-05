import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { blogData } from "./blogData";
import { specialUsers } from "./specialUsers"
 
const AuthContext = React.createContext();

function AuthProvider({ children }) {

    const navigate = useNavigate();
    const [user, setUser] = React.useState(null)
    const [data, setData ] = React.useState(blogData)

    const login = ({ userName }) => { // para setear a los usuarios y saber si son admons o superAdmons
        const userType = specialUsers.filter(specialUser => specialUser.name === userName).map(specialUser => specialUser.type)[0] || ""
        setUser({ userName, userType })
        navigate('/')
    }

    const logout = () => {
        setUser( null )
        navigate('/')
    }

    const updateData = ( item ) => {
        setData( item )
    }

    const auth = { 
        user, 
        data,
        login, 
        logout,
        updateData,
        navigate,
    };

    return (
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth() {
    const auth = React.useContext(AuthContext)
    return auth
}

function ProtectRoute({ children }) {
    const auth = useAuth()
    const location = useLocation();
    console.log('location: en ProtectRoute de Auth antes del navigate', location.state)

    if ( !auth.user ) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    console.log('location: del ProtextRoute despues del navigate', location.state)

    return children;
}

export {
    AuthProvider,
    useAuth,
    ProtectRoute,
}