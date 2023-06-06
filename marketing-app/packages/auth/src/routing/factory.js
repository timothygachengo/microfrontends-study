import { createBrowserRouter, createMemoryRouter } from "react-router-dom";
import { routes } from './routes';

export function createRouter({ strategy, initialPathname }) {
  if (strategy === 'browser') {
    return createBrowserRouter(routes);
  }

  const initialEntries = [initialPathname || "/"];
  return createMemoryRouter(routes, { initialEntries: initialEntries });
}
