import React from "react";
import { useAuth } from "./auth";


function ProfilePage () {
    const auth = useAuth()

        return (
           <>
                <h2>Perfil</h2>
                <p>Welcome, { auth.user?.userName }</p>
           </>
        )
};

export { ProfilePage };