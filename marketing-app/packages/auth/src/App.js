import React from 'react';
import {
    RouterProvider,
} from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'auth',
})

const App = ({ router }) => {
    return (
        <div>
            <StylesProvider generateClassName={generateClassName}>
                <RouterProvider router={router}>
                </RouterProvider>
            </StylesProvider>
        </div>

    );
};

export default App;
