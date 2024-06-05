import React from "react";
import { useAuth } from "./auth";
import { Navigate } from "react-router-dom";


function LoginPage () {
    const auth = useAuth();
    const [userName, setUserName] = React.useState('')

    const login = (e) => {
        e.preventDefault()
        auth.login({ userName })
    }

    if ( auth.user ) { // ir a profile
        return (
            < Navigate to= "/profile" />
        )
    }

    return (
        <>
            <h2>Login</h2>
            <form onSubmit={login}>
                <label>Ingresa tu nombre de usuario: </label>
                <input 
                    value={userName}
                    onChange= {event => setUserName(event.target.value)} 
                    placeholder="Tu nombre de usuario"
                />
                <button
                    type="submit"
                >Entrar
                </button>
            </form>
        </>
    )
};

export { LoginPage };