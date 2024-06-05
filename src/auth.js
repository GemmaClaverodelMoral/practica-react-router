import React from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { blogData } from "./blogData";

const AuthContext = React.createContext();

const adminList = ['Iris', 'Freddi', 'JuanDC']

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null)
    const [data, setData ] = React.useState(blogData)
    console.log('data: en auth', data)

    const login = ({ userName }) => { // para setear a los usuarios
        const isAdmin = adminList.find(name => name === userName)
        setUser({ userName, isAdmin })
        navigate('/profile')
    }

    const logout = () => {
        setUser( null )
        navigate('/')
    }

    const updateData = ( item ) => {
        console.log('data :beforeUpdate',data)
        console.log('item:', item)
        setData( item )
        console.log('data: afterupdate',data)
    }

    const auth = { 
        user, 
        data,
        login, 
        logout,
        updateData,
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

function ProtectRoute(props) {
    const auth = useAuth()

    if ( !auth.user ) {
        return (
            < Navigate to= "/login" />
        )
    }

    return props.children
}

export {
    AuthProvider,
    useAuth,
    ProtectRoute,
}