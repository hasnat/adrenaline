/* @flow */

import 'whatwg-fetch';
import React from 'react';
import App from 'client/components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Adrenaline, createGraphQLStore } from '../../../src';
import { graphql } from 'graphql';
import schema from 'shared/schema';

const finalCreateStore = compose(
  applyMiddleware(thunk),
  createGraphQLStore,
  createStore
);

const store = finalCreateStore(x => x);

const rootNode = document.getElementById('root');
React.render(
  <Adrenaline store={store} graphql={graphql} schema={schema}>
    {() => <App />}
  </Adrenaline>,
  rootNode
);