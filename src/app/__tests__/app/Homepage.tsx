import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage", () => {

  it('Should render the text "Sobre mi"', () => {
    render(<HomePage />);
    expect(screen.getByText(/Sobre mi/i)).toBeInTheDocument();
  });

  it('Should render the text "Intereses"', () => {
    render(<HomePage />);
    expect(screen.getByText(/Intereses/i)).toBeInTheDocument();
  });

  it("Should render a list of interests", () => {
    render(<HomePage />);
    expect(screen.getByTestId("interests-list")).toBeInTheDocument();
  });

  it("Should render the contact form", () => {
    render(<HomePage />);
    expect(screen.getByTestId("contact-form")).toBeInTheDocument();
  });

});
