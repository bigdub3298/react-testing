import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import CommentList from "components/CommentList";

let wrapper;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "Comment 2"]
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

afterEach(() => wrapper.unmount);

describe("CommentList component", () => {
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBeTruthy();
  });

  it("has one item per comment", () => {
    expect(wrapper.find(".item")).toHaveLength(2);
  });
});
