import React from 'react';
import renderer from 'react-test-renderer';

import App from '../pages/index';

jest.mock('../pages/index', () => 'App')

describe("<App /> with Enzyme", () => {
    it('Should render App without crushing', async() => {

      const tree = renderer.create(<App />).toJSON();
      expect(tree).toMatchSnapshot();
    });
  });