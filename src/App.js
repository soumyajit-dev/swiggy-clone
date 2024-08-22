import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import ContactUsComponent from './components/ContactUs';
import HeaderComponent from './components/Header';
import HomeComponent from './components/Home';
import RestaurantMenuComponent from './components/RestaurantMenu';

const AboutComponent = lazy(() => import('./components/About'));

const AppLayout = () => {
	return (
		<div className='app'>
			<HeaderComponent></HeaderComponent>
			<div className='mt-24'>
				<Outlet />
			</div>
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Navigate to={'home'} replace />,
			},
			{
				path: 'home',
				element: <HomeComponent />,
			},
			{
				path: 'about',
				element: (
					<Suspense fallback={<h1>Loading....</h1>}>
						<AboutComponent />
					</Suspense>
				),
			},
			{
				path: 'contact',
				element: <ContactUsComponent />,
			},
			{
				path: 'restaurants/:id',
				element: <RestaurantMenuComponent />,
			},
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
