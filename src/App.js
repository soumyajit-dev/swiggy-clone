import React, { lazy, Suspense, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ContactUsComponent from './components/ContactUs';
import HeaderComponent from './components/Header';
import HomeComponent from './components/Home';
import RestaurantMenuComponent from './components/RestaurantMenu';
import { Container } from './components/styles/Container.styled';
import GlobalStyle from './components/styles/Global';
import theme from './utils/theme';
import UserContext from './utils/UserContext';

const AboutComponent = lazy(() => import('./components/About'));

const AppLayout = () => {
	const [userInfo, setUserInfo] = useState();
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<UserContext.Provider value={{ loggedInUser: userInfo, setLoggedInUser: setUserInfo }}>
				<div className='app'>
					<HeaderComponent></HeaderComponent>
					<Container>
						<Outlet />
					</Container>
				</div>
			</UserContext.Provider>
		</ThemeProvider>
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
