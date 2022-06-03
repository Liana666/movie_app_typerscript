import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { MemoryRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./redux/store";
import userEvent from '@testing-library/user-event'

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

   userEvent.click(movieLink);
   expect(screen.getByTestId("movie-page")).toBeInTheDocument();

   userEvent.click(profileLink);
   expect(screen.getByTestId("profile-page")).toBeInTheDocument();
});