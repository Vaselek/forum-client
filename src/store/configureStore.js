import {createBrowserHistory} from "history";
import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {connectRouter, routerMiddleware} from "connected-react-router";
import thunkMiddleware from "redux-thunk";

import postsReducer from "./reducers/postsReducer";
import commentsReducer from "./reducers/commentsReducer";
import usersReducer from "./reducers/usersReducer";
import {loadFromLocalStorage, saveToLocalStorage} from "./localStorage";

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    router: connectRouter(history),
    posts: postsReducer,
    comments: commentsReducer,
    users: usersReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = [
    thunkMiddleware,
    routerMiddleware(history)
];

const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveToLocalStorage({
        users: {
            user: store.getState().users.user
        }
    });
});

export default store;
