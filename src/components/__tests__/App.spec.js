import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

describe("App Component", () => {
  let wrapper;

  beforeEach(() => (wrapper = shallow(<App />)));

  it("renders without crashing", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("shows comment box", () => {
    expect(wrapper.find(CommentBox)).toHaveLength(1);
  });

  it("shows comment list", () => {
    expect(wrapper.find(CommentList)).toHaveLength(1);
  });
});
