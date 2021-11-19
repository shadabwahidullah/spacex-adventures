import { render } from "react-dom";
import { MemoryRouter } from "react-router-dom";

describe("Testing routes", () => {
  it("Home page route test", () => {
    // in a real test a renderer like "@testing-library/react"
    // would take care of setting up the DOM elements
    const root = document.createElement("div");
    document.body.appendChild(root);

    // Render app
    render(
      <MemoryRouter initialEntries={["/"]}>
        <div>Welcome</div>
      </MemoryRouter>,
      root
    );

    // Check correct page content showed up
    expect(document.body.textContent).toBe("Welcome");
  });
});
