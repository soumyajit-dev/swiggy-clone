import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { environment } from '../environments/environment';
import useNetworkActivity from '../utils/useNetworkActivity';
import UserContext from '../utils/UserContext';
import { Flex } from './styles/Flex.styled';
import { Logo, StyledHeader } from './styles/Header.styled';

const HeaderComponent = () => {
	let [isUserSignedIn, setIsUserSignedIn] = useState(false);

	const onlineStatus = useNetworkActivity();
	const userContext = useContext(UserContext);

	return (
		<StyledHeader>
			<Flex $justify='space-around'>
				<Link to={'home'}>
					<Logo src={environment.imagesBasePath + 'swiggy-logo.svg'} />
				</Link>
				<Flex $justify='space-evenly' className='links'>
					<Link to={'home'}>Home</Link>
					<Link to={'about'}>About Us</Link>
					<Link to={'contact'}>Contact Us</Link>
					<Link
						onClick={() => {
							setIsUserSignedIn(!isUserSignedIn);
							userContext.setLoggedInUser('Soumyajit');
						}}>
						{!isUserSignedIn ? (
							<React.Fragment>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
									<path d='M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z' />
								</svg>
								<p>Sign In</p>
							</React.Fragment>
						) : (
							<>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
									<path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z' />
								</svg>
								<p>{userContext.loggedInUser}</p>
							</>
						)}
					</Link>
					<Link>
						<span>{onlineStatus ? '✅' : '🔴'}</span>
						<span>Cart</span>
					</Link>
				</Flex>
			</Flex>
		</StyledHeader>
	);
};

export default HeaderComponent;
