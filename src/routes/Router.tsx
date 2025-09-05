import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from '../routes/routes';
import type { RouteProps } from '../types';
import HomeLoader from '../pages/HomeLoader';

export default function AppRouter() {
    return (
        <Suspense fallback={<HomeLoader />}>
            <Routes>
                {routes.map((route: RouteProps) => {
                    const { path, component: ReactComponent } = route;
                    return <Route key={path} path={path} element={<ReactComponent />} />;
                })}
            </Routes>
        </Suspense>
    );
}