import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import HeaderComponent from './Components/Header';
import { Container } from './Components/styles/Container.styled';
import GlobalStyle from './Components/styles/Global';
import UserContext from './Services/Contexts/UserContext';
import theme from './Services/Providers/theme';
import appStore from './Services/Store/appStore';

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
