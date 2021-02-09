import React from "react";
import { configure, shallow } from "enzyme"; //Shallow rendering lets you render a component “one level deep”
import Adapter from "enzyme-adapter-react-16";

import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";

//To link Enzyme with Jest
configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper;

  //beforeEach() runs before any of the test starts.....there is also afterEach ~ where it runs after the test for cleanup purposes
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });

  it("should render two <NavigationItem /> elements if not authenticated", () => {
    //Jest method call expect, is basically our expectation...
    // The code below means Jest or Us is expect to find NavigationItem component 2 times, if we are not authenticated
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
  it("should render three <NavigationItem /> elements if authenticated", () => {
    //wrapper = shallow(<NavigationItems isAuthenticated />);
    wrapper.setProps({ isAuthenticated: true });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
  it("should an exact logout button", () => {
    wrapper.setProps({ isAuthenticated: true });
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });
});
