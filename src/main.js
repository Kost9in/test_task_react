import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from 'reducers';
import Nav from 'components/nav/Nav';
import Content from 'components/content/Content';

const store = createStore(reducers);

render(
  <Provider store={store}>
      <div className="wrapper">
          <Nav/>
          <Content/>
      </div>
  </Provider>,
  document.getElementById('root')
);