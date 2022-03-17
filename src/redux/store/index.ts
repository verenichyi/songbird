import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from 'src/redux/reducers';

const composeEnhancers = composeWithDevTools({});

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
