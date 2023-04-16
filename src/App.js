import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body';
import Header from './components/Header';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Error from './components/Error';
import Footer from './components/Footer';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import ShimmerEffect from './components/ShimmerEffect';
// import InstaMart from './components/InstaMart';

const InstaMart = lazy(() => import("./components/InstaMart"))

const AppLayout = () => {

    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },

            {
                path: "/about",
                element: <About />
            },

            {
                path: "/contact",
                element: <Contact />,
            },

            {
                path: "/restaurant/:id",
                element: <RestaurantMenu />
            },

            {
                path: "/instamart",
                element: <Suspense fallback={<ShimmerEffect />}>
                    <InstaMart />
                </Suspense>
            },
        ]
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);    