import { render } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';

describe('Testing routes', () => {
  it('Home page route test', () => {
    // in a real test a renderer like "@testing-library/react"
    // would take care of setting up the DOM elements
    const root = document.createElement('div');
    document.body.appendChild(root);

    // Render app
    render(
      <MemoryRouter initialEntries={['/']}>
        <div>Welcome</div>
      </MemoryRouter>,
      root,
    );

    // Check correct page content showed up
    expect(document.body.textContent).toBe('Welcome');
    document.body.removeChild(root);
  });

  it('Missions page route test', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    render(
      <MemoryRouter initialEntries={['/missions']}>
        <div>Missions Page</div>
      </MemoryRouter>,
      root,
    );

    expect(document.body.textContent).toBe('Missions Page');
    document.body.removeChild(root);
  });

  it('My Profile page route test', () => {
    const root = document.createElement('div');
    document.body.appendChild(root);

    render(
      <MemoryRouter initialEntries={['/profile']}>
        <div>Profile Page</div>
      </MemoryRouter>,
      root,
    );

    expect(document.body.textContent).toBe('Profile Page');
    document.body.removeChild(root);
  });
});
