import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Box from './Box';

it('renders without crashing', function(){
    shallow(<Box/>)
})

it('matches snapshot', function(){
    let wrapper = shallow(<Box/>);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
})

it('did we make a black box', function(){
    let wrapper = shallow(<Box height={100} width={100} color='black'/>);
    expect(wrapper.props().style.backgroundColor).toEqual('black');
})

