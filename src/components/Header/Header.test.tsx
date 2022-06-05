import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

import store from "../../redux/store";

import Header from "./Header";

test("Search input only rendering on the movieы page", () => {
  render(
    <Provider store={store}>
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    </Provider>
  );
  const movieLink = screen.getByTestId("movie-link");

  expect(screen.queryByTestId("seacrch-page")).toBeNull();
  userEvent.click(movieLink);
  expect(screen.getByTestId("seacrch-page")).toBeInTheDocument();
});
