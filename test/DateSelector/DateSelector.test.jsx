import React from 'react';
import renderer from 'react-test-renderer';
import DateSelector from '../../src/DateSelector';

it('[DateSelector] renders correctly', () => {
    const tree = renderer
        .create(<DateSelector/>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});