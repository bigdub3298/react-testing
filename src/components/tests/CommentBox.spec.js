import React from "react";
import { shallow } from "enzyme";
import CommentBox from "components/CommentBox";

let wrapper;

beforeEach(() => (wrapper = shallow(<CommentBox />)));

describe("CommentBox component", () => {
  it("has a text area and a button", () => {
    expect(wrapper.find("textarea")).toHaveLength(1);
    expect(wrapper.find("button")).toHaveLength(1);
  });
});

describe("the text area", () => {
  beforeEach(() => {
    wrapper.find("textarea").simulate("change", {
      target: { value: "new comment" }
    });
    wrapper.update();
  });

  it("can be typed in", () => {
    expect(wrapper.find("textarea").prop("value")).toBe("new comment");
  });

  it("clears on form submit", () => {
    wrapper.find("form").simulate("submit", { preventDefault: () => null });
    wrapper.update();

    expect(wrapper.find("textarea").prop("value")).toBe("");
  });
});
