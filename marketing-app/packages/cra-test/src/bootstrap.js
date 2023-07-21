import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const RootApp = () => {
    return (
        <React.StrictMode>
            <App />
        </React.StrictMode>
    )
}

export const mount = (el) => {
    ReactDOM.createRoot(el).render(<RootApp />);
    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
};

