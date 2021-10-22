import React from 'react';
import renderer from "react-test-renderer";

import WorkoutDetails from "./WorkoutDetails";

jest.mock('./WorkoutDetails', () => 'WorkoutDetail')

describe("Workout details", () => {
    it("Should render as expected when empty", async () => {
        const workout = {
            id: 1,
            name: "workout 1",
            exercises: [{
                name: "exercise 1",
                bodyPart: "bodypart 1"
            }]
        };

        const tree = renderer.create(
        <WorkoutDetails workout={workout}/>
        ).toJSON()
        expect(tree).toMatchSnapshot()
    })
});

