import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

function Secret () {
    const auth = useAuth()

    if ( auth.user.userName !== 'Gemma' ) {
        return (
            < Navigate to= "/" />
        )
    }

    return (
        <>
            <h2>Secret</h2> 
            {auth.user?.userName === 'Gemma' && <p>Hola {auth.user.userName}, la informacion secreta esta a tu disposición</p>}
        </>
    )};

export { Secret };