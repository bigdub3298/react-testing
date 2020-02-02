import React from "react";
import ReactDOM from "react-dom";
import App from "../App";

it("renders app without crashing", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  ReactDOM.unmountComponentAtNode(div);
});

it("shows comment box", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain("Comment Box");

  ReactDOM.unmountComponentAtNode(div);
});

it("shows comment list", () => {
  const div = document.createElement("div");

  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain("Comment List");

  ReactDOM.unmountComponentAtNode(div);
});
