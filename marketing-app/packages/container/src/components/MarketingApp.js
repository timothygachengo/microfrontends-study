import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';
import { useNavigate, useLocation } from 'react-router-dom';

const app1Basename = "/";

const MarketingApp = () => {
    const marketingRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();
    console.log("location", location);

      // Listen to navigation events dispatched inside app1 mfe.
  useEffect(() => {
    const app1NavigationEventHandler = (event) => {
      const pathname = event.detail;
      const newPathname = `${app1Basename}`;

      console.log("new pathname", newPathname);
      if (newPathname === location.pathname) {
        return;
      }
      navigate(newPathname);
    };
    window.addEventListener("[app1] navigated", app1NavigationEventHandler);

    return () => {
      window.removeEventListener(
        "[app1] navigated",
        app1NavigationEventHandler
      );
    };
  }, [location]);

  // Listen for shell location changes and dispatch a notification.
  useEffect(
    () => {
      if (location.pathname.startsWith(app1Basename)) {
        window.dispatchEvent(
          new CustomEvent("[shell] navigated", {
            detail: location.pathname.replace(app1Basename, ""),
          })
        );
      }
    },
    [location],
  );

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  // Mount marketing MFE
  useEffect(
    () => {
      if (!isFirstRunRef.current) {
        return;
      }
      unmountRef.current = mount({
        mountPoint: marketingRef.current
      });
      isFirstRunRef.current = false;
    },
    [location],
  );

  useEffect(() => unmountRef.current, []);


    return (
        <div ref={marketingRef}></div>
    )
}

export default MarketingApp;
