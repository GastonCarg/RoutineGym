import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux'

import App from './app/features/app/components/App';
import configureStore from './app/config/store';

import { name as appName } from './app.json';

const store = configureStore(undefined);

const enhancedApp = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
};

AppRegistry.registerComponent(appName, () => enhancedApp);
