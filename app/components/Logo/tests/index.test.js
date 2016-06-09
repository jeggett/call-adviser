import Logo from '../index';

import expect from 'expect';
import { shallow } from 'enzyme';
import React from 'react';

describe('<Logo />', () => {
  it('should render a div tag', () => {
    const renderedComponent = shallow(<Logo />);
    expect(renderedComponent).to.have.tagName('div');
  });
});
