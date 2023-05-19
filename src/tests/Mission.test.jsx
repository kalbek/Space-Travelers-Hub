import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from '../components/Mission';
import store from '../redux/store';

test('It should render correctly', () => {
  const tree = render(
    <Provider store={store}>
      <Mission />
    </Provider>,
  );
  expect(tree).toMatchSnapshot();
});
