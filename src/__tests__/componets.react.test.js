import React from "react";
import Rockets from "../components/rockets/Rockets";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import store from "../redux/store";

describe("Component tests", () => {
  test("Rockets test", () => {
    const rockets = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>
    );

    let tree = rockets.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
