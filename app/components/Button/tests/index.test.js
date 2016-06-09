import Button from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Button />', () => {
  it('should render its children', () => {
    const children = (<div>test</div>);
    const renderedComponent = shallow(
      <Button>
        {children}
      </Button>
    );
    expect(renderedComponent.contains(children)).toEqual(true);
  });
  it('should adopt the className', () => {
    const renderedComponent = shallow(<Button className="test" />);
    expect(renderedComponent.find('button').hasClass('test')).toEqual(true);
  });
  it('should handle click events', () => {
    const onClickSpy = expect.createSpy();
    const renderedComponent = shallow(<Button onClick={onClickSpy} />);
    renderedComponent.find('button').simulate('click');
    expect(onClickSpy).toHaveBeenCalled();
  });
});
