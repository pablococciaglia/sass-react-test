import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import React from 'react';
import { Sort } from '../components/Select/Sort';

const wrapper = shallow(<Sort />);

describe('test on Sort.js', () => {
     
    test('create a snapshot of the component', () => {
        expect(wrapper).toMatchSnapshot();
    })
    
    test('should show the sort (its a "form" element) options on click on the div (SORT GAMES)', () => {
        wrapper.find('div').at(1).simulate('click');
        expect((wrapper.find('form')).exists()).toBe(true);
    })

});
 