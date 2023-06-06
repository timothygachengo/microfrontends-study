import React from 'react';
import {
    RouterProvider,
} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

const App = ({ router }) => {
    return (
        <div>
            <StylesProvider>
                <RouterProvider router={router}>
                </RouterProvider>
            </StylesProvider>
        </div>

    );
};

export default App;
