import React from 'react';
import App from '../components/App';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SAMPLE_DATA from '../sampleData';
import './helpers';
import './dom';

describe('App component', () => {
  const items = SAMPLE_DATA.items;
  const getItems = jest.fn();

  const component = shallow(
    <App
      items={items}
      getItems={getItems}
    />
  );

  const mountedComponent = mount(
    <App
      items={items}
      getItems={getItems}
    />
  );

  it('getItems is function', () => {
    expect(typeof getItems).to.equal('function');
  });

  it('render Header component', () => {
    expect(component.find(Header)).to.have.length(1);
  });

  it('render Footer component', () => {
    expect(component.find(Footer)).to.have.length(1);
  });
});
