import React, {useEffect, useRef} from 'react'
import { mount } from 'cra/CraApp';
import {useLocation} from "react-router-dom";

const CraApp = () => {
    const craAppRef = useRef(null);
    const location = useLocation();

    const isFirstRunRef = useRef(true);
    const unmountRef = useRef(() => {});

    // Mount marketing MFE
    useEffect(
        () => {
            if (!isFirstRunRef.current) {
                return;
            }
            unmountRef.current = mount(craAppRef.current);
            isFirstRunRef.current = false;
        },
        [location],
    );

    useEffect(() => unmountRef.current, []);

    return (
        <div ref={craAppRef}></div>
    )
}
export default CraApp;

