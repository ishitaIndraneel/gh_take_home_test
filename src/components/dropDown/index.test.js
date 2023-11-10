import React from 'react';
import  Dropdown  from './index'
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { changeHomeOwnership} from '../../features/aggregate/reducer'

const mockStore = configureStore();

describe('Dropdown', () => {
  let store;
  let wrapper;
  const allHomeOwn = ["MORTGAGE", "RENT", "OWN"]

  beforeEach(() => {
    store = mockStore({});
    wrapper = shallow(<Provider store={store}><Dropdown label="HomeOwnership"  value="homeOwnership" options={allHomeOwn} uponSelection={changeHomeOwnership} /></Provider>);
  });

  it('dropdown is rendered', () => {
    expect(wrapper).toBeTruthy();
  });

});

