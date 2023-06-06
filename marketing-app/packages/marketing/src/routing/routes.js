import React from 'react';
import { Outlet } from "react-router-dom";
import { NavigationManager } from '../components/NavigationManager'
import Landing from '../components/Landing';
import Pricing from '../components/Pricing';

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
                element: <Landing />,
            },
            {
                path: "pricing",
                element: <Pricing />,
            }
        ]
    }
]
