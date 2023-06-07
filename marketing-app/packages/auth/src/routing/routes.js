import React from 'react';
import { Outlet, Navigate } from "react-router-dom";
import { NavigationManager } from '../components/NavigationManager'

import Signin from '../components/Signin';
import Signup from '../components/Signup';

/**
 * This is the routes configuration for the Marketing app.
 * @type {import('react-router-dom').RouteObject[]}
 */
export const routes = [
    {
        path: "/",
        element: (
            <NavigationManager>
                <Outlet />
            </NavigationManager>
        ),
        children: [
            {
                index: true,
                element: <Signin />,
            },
            {
                path: "signup",
                element: <Signup />,
            }
        ]
    }
]
