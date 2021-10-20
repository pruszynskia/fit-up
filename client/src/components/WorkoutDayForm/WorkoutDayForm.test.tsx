import React from "react";
import renderer from "react-test-renderer";
import moment from "moment";
import WorkoutDayForm from "./WorkoutDayForm";

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

interface WorkoutDayForm {
  date: moment.Moment;
  handleCloseF: () => void;
}

describe("Workout day form", () => {
  it("Should render as expected", () => {
    let date = moment();
    let handleCloseF = () => handleCloseF;

    const mockStore = configureStore()
    let store;

    const initialState = {
      workout: [{
        id: 1,
        workoutID: 1,
        workoutName: "name",
        date: "01012021",
        exercises: [{
          name: "exercise 1",
          bodyPart: "body part 1"
        }]
      }]
    }

    store = mockStore(initialState)
    const tree = renderer.create(
      <Provider store={store}>
      <WorkoutDayForm date={date} handleCloseF={handleCloseF} />
      </Provider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
