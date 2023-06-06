import React, { lazy, Suspense } from "react";
import Header from "../components/Header";

const MarketingAppLazy = lazy(() => import("../components/MarketingApp"));
const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export const routes = [
    {
        path: "/",
        element: (
            <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                    <MarketingAppLazy />
                </Suspense>
            </Layout>
        )
    }
]
