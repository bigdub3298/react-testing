import { saveComment } from "actions";

describe("Save Comment action creator", () => {
  let comment, action;
  beforeEach(() => {
    comment = "New comment";
    action = saveComment(comment);
  });

  it("returns an action of type SAVE_COMMENT", () => {
    expect(action.type).toBe("SAVE_COMMENT");
  });

  it("returns an action with payload passed in comment", () => {
    expect(action.payload).toBe("New comment");
  });
});
