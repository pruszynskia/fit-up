import React from 'react';
import renderer from "react-test-renderer";
import WorkoutDetails from "./WorkoutDetails";

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

// interface WorkoutDetailsProps {
//     workout: [{
//         id: 1,
//         name: "name",
//         exercises: [{
//             name: "name",
//             bodyPart: "name"
//         }]
//     }]
// }

describe("Workout details", () => {
    it("Should render as expected", () => {

        let workout

        const mockStore = configureStore()
        let store;

        const initialState = {
            workout: [{
                id: 1,
                name: "name",
                exercises: [{
                    name: "exercise 1",
                    bodyPart: "body part 1"
                }]
            }]
        }

        store = mockStore(initialState)
        const tree = renderer.create(
            <Provider store={store}>
                <WorkoutDetails workout={workout}/>
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();

    })
})