import React from "react";
import { useAuth } from "./auth";
import { useLocation, Navigate } from "react-router-dom";

function LogoutPage () {
   
    const auth = useAuth();
//PARA LOCACION ANTERIOR x1
    const location = useLocation();
    
    const logout = (e) => {
        e.preventDefault()
//PARA LOCACION ANTERIOR x1
        const from = location.state?.from?.pathname || "/";
        auth.logout()
//PARA LOCACION ANTERIOR x2
        // Navegar a la página anterior
        auth.navigate(from, { replace: true });
    }
//PARA LOCACION ANTERIOR x4
    if (!auth.user) {
        const from = location.state?.from?.pathname || "/";
        return <Navigate to={from} replace />;
    }

    return (
        <>
            <h2>Logout</h2>
            <form onSubmit={logout}>
                <label>¿ Estas segura de que deseas salir ? : </label>
                <button type = "submit">Salir</button>
            </form>
        </>
    )
};

export { LogoutPage };