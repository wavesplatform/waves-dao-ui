import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { appendMetaOpenGraph } from './initApp/appendMetaOpenGraph/appendMetaOpenGraph';

appendMetaOpenGraph()
document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    )
});
