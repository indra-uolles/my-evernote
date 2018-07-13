import { createStore, applyMiddleware, compose } from 'redux';
import Config from '../Config/DebugConfig';
// import ScreenTracking from './ScreenTrackingMiddleware';
import thunk from 'redux-thunk';
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';

// creates the store
export default (rootReducer) => {
    /* ------------- Redux Configuration ------------- */

    const middleware = [];
    const enhancers = [];
    
    /* ------------- Navigation Middlewate ------------ */
    const navigationMiddleware = createReactNavigationReduxMiddleware(
        'root',
        state => state.nav
    );
    middleware.push(navigationMiddleware);
    middleware.push(thunk);

    /* ------------- Analytics Middleware ------------- */
    // middleware.push(ScreenTracking);

    /* ------------- Assemble Middleware ------------- */

    enhancers.push(applyMiddleware(...middleware));

    // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
    const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore;
    const store = createAppropriateStore(rootReducer, compose(...enhancers));

    // configure persistStore and check reducer version number
    // if (ReduxPersist.active) {
    //     Rehydration.updateReducers(store);
    // }

    return {
        store,
    };
};
