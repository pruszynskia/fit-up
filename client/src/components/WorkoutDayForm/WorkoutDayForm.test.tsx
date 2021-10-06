import React from 'react';
import TestRenderer from 'react-test-renderer';
import moment from 'moment';
import WorkoutDayForm from './WorkoutDayForm';

interface WorkoutDayForm {
    // data?: WorkoutDayDetails;
    date: moment.Moment;
    handleCloseF: () => void
}

describe.skip("Workout day form", () => {

    it("Should render as expected", () => {
        let date = moment();
        let handleCloseF = () => handleCloseF

        const tree = TestRenderer
            .create(
                <WorkoutDayForm date={date} handleCloseF={handleCloseF}/>
            )
            .toJSON();
            expect(tree).toMatchSnapshot();
    });
});
