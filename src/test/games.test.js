import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import { Games } from '../components/Games-list/Games';

const wrapper = shallow(<Games />);

describe('test on Games.js', () => {
     
    test('create a snapshot of the component', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('show if when we start it brings the .json file as an object', async () => {
        const customData = require('../assets/games.json')
        expect (typeof customData).toBe('object');
    })

});
 