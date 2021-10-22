import React from "react";
import renderer from 'react-test-renderer';

import Calendar from '.'

jest.mock('moment', () => {
    return () => jest.requireActual('moment')('2020-01-01T00:00:00.000Z');
});

describe("<Calendar/> should render as expected", () => {
    it("Should render as expected", () => {

        const tree = renderer.create(
            <Calendar/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    })
})