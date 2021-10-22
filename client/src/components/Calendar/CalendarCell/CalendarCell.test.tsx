import moment from "moment";
import React from "react";
import renderer from 'react-test-renderer';

import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import CalendarCell from ".";

jest.mock('./CalendarCell', () => 'CalendarCell')
jest.mock('moment', () => {
    return () => jest.requireActual('moment')('2020-01-01T00:00:00.000Z');
});

interface CalendarCell {
    date: moment.Moment;
    selectedDay: any;
    handleDayClick: Function
}

describe("<CalendarCell/> should render as expected", () => {
    it("Should render as expected", () => {

        let date = moment();
        let selectedDay
        const handleDayClick = () => handleDayClick;
        
        const mockStore = configureStore();
        let store

        store = mockStore(selectedDay)
        const tree = renderer.create(
            <Provider store={store}>
                <CalendarCell date={date} selectedDay={selectedDay} handleDayClick={handleDayClick} />
            </Provider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})