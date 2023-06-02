import React from 'react';
import ReactDOM from 'react-dom';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const routerFactory = createBrowserRouter([
    {
        path: '/',
        element: <Landing />,
    },
    {
        path: '/pricing',
        element: <Pricing />,
    }
]);

const App = () => {
    return (
        <div>
            <StylesProvider>
                <RouterProvider router={routerFactory}>
                </RouterProvider>
            </StylesProvider>
        </div>

    );
};

export default App;
