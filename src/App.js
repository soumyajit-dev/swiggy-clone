import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import AboutComponent from './components/About';
import ContactUsComponent from './components/ContactUs';
import HeaderComponent from './components/Header';
import HomeComponent from './components/Home';
import RestaurantMenuComponent from './components/RestaurantMenu';

const AppLayout = () => {
	return (
		<div className='app'>
			<HeaderComponent></HeaderComponent>
			<Outlet />
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
				element: <AboutComponent />,
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
