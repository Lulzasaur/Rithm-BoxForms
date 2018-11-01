import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewBoxForm from './NewBoxForm';

it('renders without crashing', function(){
    shallow(<NewBoxForm/>)
})

it('matches snapshot', function(){
    let wrapper = shallow(<NewBoxForm/>);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
})

it('test state has changed when we onchange', function(){
    let wrapper = shallow(<NewBoxForm/>);
    wrapper.setState({height:0,width:0,color:'white'})
    const input = wrapper.find('#height').first()
    input.simulate('change',{
        target:{name: "height", value:9999}
    })
    expect(wrapper.state().height).toEqual(9999);
})