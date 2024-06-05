import React from "react";
import { useAuth } from "./auth";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
 
function LoginPage () {
    const auth = useAuth();
    const location = useLocation();
    console.log('location.state de loginPage', location.state)
    const navigate = useNavigate();
    console.log('location en loginPage: despues de navigate', location.state)
    const [userName, setUserName] = React.useState('')

    const login = (e) => {
        e.preventDefault()
        auth.login({ userName })
        const from = location.state?.from?.pathname || "/";
        console.log('from: del login', from)
        navigate(from, { replace: true });
    }

    if ( auth.user ) {
        const from = location.state?.from?.pathname || "/profile";
        return <Navigate to={from} replace />
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