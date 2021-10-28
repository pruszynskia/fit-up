import React from "react";
import {render} from '@testing-library/react';

import Calendar from './Calendar'
import moment from 'moment'

jest.mock('moment', () => jest.fn());

describe("<Calendar/> should render as expected", () => {

    it("Should render as expected", () => {

        const tree = render(
            <Calendar  />
        )
        expect(tree).toMatchSnapshot();
    })
})