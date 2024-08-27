import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import AppComponent from './App';
import AboutComponent from './components/About';
import HomeComponent from './components/Home';
import RestaurantMenuComponent from './components/RestaurantMenu';

const SearchComponent = lazy(() => import('./components/Search'));
const CartComponent = lazy(() => import('./components/Cart'));

const AppRouter = createBrowserRouter([
	{
		path: '/',
		element: <AppComponent />,
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
				path: 'search',
				element: (
					<Suspense fallback={<h1>Loading....</h1>}>
						<SearchComponent />
					</Suspense>
				),
			},
			{
				path: 'about',
				element: <AboutComponent />,
			},
			{
				path: 'cart',
				element: (
					<Suspense fallback={<h1>Loading...</h1>}>
						<CartComponent />
					</Suspense>
				),
			},
			{
				path: 'restaurants/:id',
				element: <RestaurantMenuComponent />,
			},
		],
	},
]);

export default AppRouter;
