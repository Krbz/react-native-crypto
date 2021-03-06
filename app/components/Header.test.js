import "react-native";
import React from "react";
import expect from "expect";

import { Header } from "./Header";
import { shallow } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Header Component Test Case', () => {
  const component = shallow(<Header dispatch={() => {}} nav={{
    isSearchActive: false,
    isBackBtnActive: false,
    isFavouriteActive: false,
    isSettingsActive: false,
  }} />);

  it('renders correctly', () => {
    expect(component).toBeDefined();
  });
});