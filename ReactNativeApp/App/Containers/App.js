import React, { Component } from 'react';
import { Provider } from 'react-redux';
import createStore from '../Redux';
import '../Config';
import DebugConfig from '../Config/DebugConfig';
import RootContainer from './RootContainer';

const store = createStore();

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <RootContainer/>
            </Provider>
        );
    }
}

// allow reactotron overlay for fast design in dev mode
export default DebugConfig.useReactotron
    ? console.tron.overlay(App)
    : App;
