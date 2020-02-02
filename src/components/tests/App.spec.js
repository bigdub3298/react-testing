import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

describe("App Component", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("renders app without crashing", () => {
    expect(wrapper).toBeDefined();
  });

  it("shows comment box", () => {
    expect(wrapper.find(CommentBox)).toHaveLength(1);
  });

  it("shows comment list", () => {
    expect(wrapper.find(CommentList)).toHaveLength(1);
  });
});
