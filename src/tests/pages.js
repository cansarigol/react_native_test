import 'react-native';
import React from 'react';
import Home from './pages/Home';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Home />
    ).toJSON();
  expect(tree).toMatchSnapshot();
});