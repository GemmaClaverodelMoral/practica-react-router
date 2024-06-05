import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MyRoutes } from "./MyRoutes";
import { useAuth } from "./auth";

function Menu () {
    const auth = useAuth();
    const location = useLocation();
    console.log('location en Menu:', location.state);


    return (
        <nav>
            <ul>
                {MyRoutes.map(( route ) => {
                    
                    if (route.hidden && !auth.user) return null
                    if (route.text === 'Login' && auth.user) return null
                    if (route.text === 'Secret' && auth.user.userType ==='') return null

                    return (
                        <li key = { route.text }>
                            <NavLink 
                                to = { route.to }
                                state={{ from: location }}
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