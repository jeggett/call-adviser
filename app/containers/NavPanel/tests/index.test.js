import NavPanel from '../index';

import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('<NavPanel />', () => {
  it('should link to "/main/new"', () => {
    const openRouteSpy = expect.createSpy();
    
    // Spy on the openRoute method of NavPanel
    const openRoute = (dest) => {
      if (dest === '/main/new') {
        openRouteSpy();       
      }
    };
    
    const renderedComponent = mount(
      <NavPanel changeRoute={openRoute} />
    );
    const button = renderedComponent.find('button');
    button.simulate('click');
    expect(openRouteSpy).toHaveBeenCalled();
  });
});
