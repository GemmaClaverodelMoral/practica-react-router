import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

function Secret () {
    const auth = useAuth()
    
    if ( !auth.user || auth.user?.userType === '' ) {
        return (
            < Navigate to= "/" />
        )
    }

    return (
        <>
            <h2>Secret</h2> 
            {auth.user?.userType !== '' && 
              <>
                <p>Hola {auth.user?.userName}, la informacion secreta esta a tu disposición</p>
                <p>Eres usuario tipo: {auth.user?.userType}</p>
              </>}
        </>
    )};

export { Secret };