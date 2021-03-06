import "react-native";
import React from "react";
import expect from "expect";

import { AllCrypto } from "./AllCrypto";
import { shallow } from "enzyme";

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('AllCrypto Component Test Case', () => {
  const component = shallow(<AllCrypto dispatch={() => {}} coins={{
    isFetching: false,
    data: null,
    error: null,
  }} />);

  it('renders correctly', () => {
    expect(component).toBeDefined();
  });
});