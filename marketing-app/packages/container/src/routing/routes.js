import React, { lazy, Suspense } from "react";
import Header from "../components/Header";
import Progress from "../components/Progress";

const MarketingAppLazy = lazy(() => import("../components/MarketingApp"));
const AuthAppLazy = lazy(() => import("../components/AuthApp"));
const CraAppLazy = lazy(() => import("../components/CraApp"));

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
                <Suspense fallback={<Progress/>}>
                    <MarketingAppLazy />
                </Suspense>
            </Layout>
        ),
    },
    {
        path: '/auth/*',
        element: (
            <Layout>
                <Suspense fallback={<Progress/>}>
                    <AuthAppLazy />
                </Suspense>
            </Layout>
        )
    },
    {
        path: '/cra',
        element: (
            <Layout>
                <Suspense fallback={<Progress/>}>
                    <CraAppLazy />
                </Suspense>
            </Layout>
        )
    }
]
