import React from "react";
import { createRoot } from "react-dom/client";
import { createRouter } from "./routing/factory";
import App from "./App";

const mount = ({
  mountPoint,
  initialPathname,
  routingStrategy,
}) => {
  const router = createRouter({ strategy: routingStrategy, initialPathname });
  const root = createRoot(mountPoint);
  root.render(<App router={router} />);

  return () => queueMicrotask(() => root.unmount());
};

export { mount };
