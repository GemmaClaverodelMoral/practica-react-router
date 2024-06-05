import React from "react";
import { NavLink } from "react-router-dom";
import { MyRoutes } from "./MyRoutes";
import { useAuth } from "./auth";

function Menu () {
    const auth = useAuth();


    return (
        <nav>
            <ul>
                {MyRoutes.map(( route ) => {
                    
                    if (route.hidden && !auth.user) return null
                    if (route.text === 'Login' && auth.user) return null
                    if (route.text === 'Secret' && auth.user.userName !== 'Gemma') return null

                    return (
                        <li key = { route.text }>
                            <NavLink 
                                to = { route.to }
                                style = {({ isActive }) => ({
                                    color: isActive ? 'red' : 'blue'
                                })}
                            >{ route.text }
                            </NavLink>
                        </li>
                    )
                   
                })}
            </ul>
        </nav>
    )
};

export { Menu };