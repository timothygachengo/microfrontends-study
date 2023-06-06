import React, { ReactElement, useEffect } from "react";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import { routes } from "../routing/routes";

export function NavigationManager({ children }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    function shellNavigationHandler(event) {
      const pathname = event.detail;
      if (location.pathname === pathname || !matchRoutes(routes, { pathname })) {
        return;
      }
      navigate(pathname);
    }

    window.addEventListener("[shell] navigated", shellNavigationHandler);

    return () => {
      window.removeEventListener("[shell] navigated", shellNavigationHandler);
    };
  }, [location]);

  useEffect(() => {
    console.log("location", location);
    window.dispatchEvent(
      new CustomEvent("[app1] navigated", { detail: location.pathname })
    );
  }, [location]);

  return children;
}
