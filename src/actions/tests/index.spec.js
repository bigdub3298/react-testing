import { saveComment } from "actions";

describe("saveComment action creator", () => {
  let comment, action;
  beforeEach(() => {
    comment = "New comment";
    action = saveComment(comment);
  });

  it("has type of SAVE_COMMENT", () => {
    expect(action.type).toBe("SAVE_COMMENT");
  });

  it("has correct payload", () => {
    expect(action.payload).toBe("New comment");
  });
});
