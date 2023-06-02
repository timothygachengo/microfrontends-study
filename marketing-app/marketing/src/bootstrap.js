import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'

const mount = (el) => {
    ReactDOM.createRoot(el).render(<App />);
}

// if we are in development and in isolation
// call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-app-root');
    if (devRoot) {
        mount(devRoot);
    }
}

export { mount };
