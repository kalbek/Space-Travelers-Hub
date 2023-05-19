import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import MyProfile from '../pages/MyProfile';

describe('MyProfile', () => {
  it('should render missions and rockets correctly', () => {
    const tree = render(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
