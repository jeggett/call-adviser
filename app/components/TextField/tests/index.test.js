import TextField from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<TextField />', () => {
  it('should render its children', () => {
    const children = (<h1>test</h1>);
    const renderedComponent = shallow(<TextField>{children}</TextField>);
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should adopt the classname', () => {
    const renderedComponent = shallow(
      <TextField className="test" />
    );
    expect(renderedComponent.find('div').hasClass('test')).toEqual(true);
  });
  it('should render the input field', () => {
    const renderedComponent = shallow(<TextField />);
    expect(renderedComponent.find('input').length).toEqual(1);
  });
  it('should assign input field a type passed to it', () => {
    const renderedComponent = shallow(<TextField type="test123" />);
    expect(renderedComponent.find('input').hasClass('test123')).toEqual(true);
  });
  it('should render span element', () => {
    const renderedComponent = shallow(<TextField />);
    expect(renderedComponent.find('span').length).toEqual(1);
  });
});
