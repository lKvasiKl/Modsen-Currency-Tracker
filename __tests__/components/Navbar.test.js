import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "@components/Navbar";
import { THEME } from "@constants/theme";

test("Navbar renders correctly", () => {
  render(
    <MemoryRouter>
      <ThemeProvider theme={THEME.dark}>
        <Navbar />
      </ThemeProvider>
    </MemoryRouter>,
  );

  expect(screen.getByTestId("nav-logo")).toBeInTheDocument();

  expect(screen.getByTestId("nav-Home")).toBeInTheDocument();
  expect(screen.getByTestId("nav-Timeline")).toBeInTheDocument();
  expect(screen.getByTestId("nav-BankCard")).toBeInTheDocument();
  expect(screen.getByTestId("nav-Contato")).toBeInTheDocument();

  expect(screen.getByTestId("nav-switch")).toBeInTheDocument();
  expect(screen.getByTestId("nav-burger-menu")).toBeInTheDocument();
});
