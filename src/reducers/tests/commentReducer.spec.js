import commentReducer from "reducers/commentReducer";

describe("Comment Reducer", () => {
  let action, state;

  beforeEach(() => {
    action = { type: "SAVE_COMMENT", payload: "New comment" };
    state = commentReducer(undefined, action);
  });

  it("saves a comment when passed an action of type SAVE_COMMENT", () => {
    expect(state).toEqual(["New comment"]);
  });

  it("only returns the previous state when passed action of any other type", () => {
    action = { type: "DELETE_COMMENT" };
    state = commentReducer(state, action);

    expect(state).toEqual(["New comment"]);
  });
});
