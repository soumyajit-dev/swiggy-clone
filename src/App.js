import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HeaderComponent from './components/Header';
import { Container } from './components/styles/Container.styled';
import GlobalStyle from './components/styles/Global';
import appStore from './redux/store/appStore';
import theme from './utils/theme';
import UserContext from './utils/UserContext';

const AppComponent = () => {
	const [userInfo, setUserInfo] = useState();
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Provider store={appStore}>
				<UserContext.Provider value={{ context: userInfo, setContext: setUserInfo }}>
					<div className='app'>
						<HeaderComponent></HeaderComponent>
						<Container>
							<Outlet />
						</Container>
					</div>
				</UserContext.Provider>
			</Provider>
		</ThemeProvider>
	);
};

export default AppComponent;
