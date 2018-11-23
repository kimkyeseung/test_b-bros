import React from 'react';
import Footer from '../components/Footer';
import './helpers';
import './dom';

describe('Footer component', () => {
  const component = shallow(<Footer />);

  it('should render one footer element', () => {
    expect(component.find('footer').length).to.equal(1);
  });

  it('should render one unordered lists element', () => {
    expect(component.find('ul').length).to.equal(1);
  });
});