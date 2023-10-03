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

  expect(screen.getByTestId("navLogo")).toBeInTheDocument();

  expect(screen.getByTestId("navHome")).toBeInTheDocument();
  expect(screen.getByTestId("navTimeline")).toBeInTheDocument();
  expect(screen.getByTestId("navBankCard")).toBeInTheDocument();
  expect(screen.getByTestId("navContato")).toBeInTheDocument();

  expect(screen.getByTestId("navSwitch")).toBeInTheDocument();
  expect(screen.getByTestId("navBurgerMenu")).toBeInTheDocument();
});
