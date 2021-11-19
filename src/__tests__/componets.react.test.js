import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../components/rockets/Rockets';
import store from '../redux/store';
import Missions from '../components/missions/Missions';
import MyProfile from '../components/MyProfile';

describe('Component tests', () => {
  test('Rockets snapshot test', () => {
    const rockets = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );

    const tree = rockets.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('Missions snapshot test', () => {
    const rockets = renderer.create(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );

    const tree = rockets.toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('My profile snapshot test', () => {
    const rockets = renderer.create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    );

    const tree = rockets.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
