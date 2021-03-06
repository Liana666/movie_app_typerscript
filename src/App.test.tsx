import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

import store from "./redux/store";

import App from "./App";

test("Routing check", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  );
  const movieLink = screen.getByTestId("movie-link");
  const profileLink = screen.getByTestId("profile-link");

  expect(movieLink).toBeInTheDocument();
  expect(profileLink).toBeInTheDocument();

  userEvent.click(movieLink);
  expect(screen.getByTestId("movie-page")).toBeInTheDocument();

  userEvent.click(profileLink);
  expect(screen.getByTestId("profile-page")).toBeInTheDocument();
});
