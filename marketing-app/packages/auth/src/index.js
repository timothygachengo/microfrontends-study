const DIV_ROOT_ID = '_auth-app-root';

import('./bootstrap').then(({ mount }) => {
    const appRoot = document.getElementById(DIV_ROOT_ID);

    if (appRoot) {
        mount({
            mountPoint: appRoot,
            routingStrategy: 'browser',
        });
    }
});

export {};
