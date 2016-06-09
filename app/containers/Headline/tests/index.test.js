import Headline from '../index';

import expect from 'expect';
import { shallow, mount } from 'enzyme';
import React from 'react';

describe('<Headline />', () => {
  it('should render its children', () => {
    const children = (<div>test</div>);
    const renderedComponent = shallow(
      <Headline>
        {children}
      </Headline>
    );
    expect(renderedComponent.contains(children));
  });

  it('should link to /settings', () => {
    const openRouteSpy = expect.createSpy();
    // Spy on the openRoute method of the HeadLine container
    const openRoute = (dest) => {
      if (dest === '/features') {
        openRouteSpy();
      }
    };
    const renderedComponent = mount(
      <Headline changeRoute={openRoute} />
    );
    const settingsLink = renderedComponent.find('a.settings');
    settingsLink.simulate('click');
    // noinspection JSUnresolvedFunction
    expect(openRouteSpy).toHaveBeenCalled();
  });
  // TODO it('should fire logout action when `logout` is clicked')
});
