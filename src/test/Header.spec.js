import React from 'react';
import Header from '../components/Header';
import './helpers';
import './dom';

describe('Header component', () => {
  const component = shallow(<Header />);

  it('should render one header element', () => {
    expect(component.find('header').length).to.equal(1);
  });

  it('should render one unordered lists element', () => {
    expect(component.find('ul').length).to.equal(1);
  });
});
