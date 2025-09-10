import React, { useContext, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import UserContext from '../Services/Contexts/UserContext';
import { useNetworkActivity } from '../Utils/CustomHooks';
import { Flex } from './styles/Flex.styled';
import { CartIcon, HeaderIcon, Logo, StyledHeader } from './styles/Header.styled';

const HeaderComponent = () => {
	let [isUserSignedIn, setIsUserSignedIn] = useState(false);

	const onlineStatus = useNetworkActivity();
	const userContext = useContext(UserContext);

	// Subscribing to the store using a selector
	const cartStore = useSelector((store) => store.cart.items);
	const cartCount = () => cartStore.reduce((acc, curr) => (acc = acc + curr.quantity), 0);

	return (
		<StyledHeader>
			<Flex $justify='space-around' className='lg:justify-around md:justify-between'>
				<Link to={'home'}>
					<Logo src={process.env.imagesBasePath + 'swiggy-logo.svg'} />
				</Link>
				<Flex $justify='space-evenly' className='links'>
					<span className='cursor-pointer flex gap-2'>
						Online:
						<span>{onlineStatus ? '✅' : '🔴'}</span>
					</span>
					<Link to={'home'}>Home</Link>
					<Link to={'search'}>
						<HeaderIcon src={process.env.imagesBasePath + 'search.svg'}></HeaderIcon>
						Search
					</Link>
					<Link to={'contact'}>Contact Us</Link>
					<Link
						onClick={() => {
							setIsUserSignedIn(!isUserSignedIn);
							userContext.setContext({ loggedInUser: 'Soumyajit' });
						}}>
						{!isUserSignedIn ? (
							<React.Fragment>
								<svg viewBox='6 0 12 24' height='19' width='18' fill='#686b78'>
									<path d='M11.9923172,11.2463768 C8.81761115,11.2463768 6.24400341,8.72878961 6.24400341,5.62318841 C6.24400341,2.5175872 8.81761115,0 11.9923172,0 C15.1670232,0 17.740631,2.5175872 17.740631,5.62318841 C17.740631,8.72878961 15.1670232,11.2463768 11.9923172,11.2463768 Z M11.9923172,9.27536232 C14.0542397,9.27536232 15.7257581,7.64022836 15.7257581,5.62318841 C15.7257581,3.60614845 14.0542397,1.97101449 11.9923172,1.97101449 C9.93039471,1.97101449 8.25887628,3.60614845 8.25887628,5.62318841 C8.25887628,7.64022836 9.93039471,9.27536232 11.9923172,9.27536232 Z M24,24 L0,24 L1.21786143,19.7101449 L2.38352552,15.6939891 C2.85911209,14.0398226 4.59284263,12.7536232 6.3530098,12.7536232 L17.6316246,12.7536232 C19.3874139,12.7536232 21.1256928,14.0404157 21.6011089,15.6939891 L22.9903494,20.5259906 C23.0204168,20.63057 23.0450458,20.7352884 23.0641579,20.8398867 L24,24 Z M21.1127477,21.3339312 L21.0851024,21.2122487 C21.0772161,21.1630075 21.0658093,21.1120821 21.0507301,21.0596341 L19.6614896,16.2276325 C19.4305871,15.4245164 18.4851476,14.7246377 17.6316246,14.7246377 L6.3530098,14.7246377 C5.4959645,14.7246377 4.55444948,15.4231177 4.32314478,16.2276325 L2.75521062,21.6811594 L2.65068631,22.0289855 L21.3185825,22.0289855 L21.1127477,21.3339312 Z'></path>
								</svg>
								Sign In
							</React.Fragment>
						) : (
							<>
								<svg height='20' width='20' viewBox='0 0 448 512'>
									<path d='M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z' />
								</svg>
								{userContext.context.loggedInUser}
							</>
						)}
					</Link>
					<Link className='relative pl-8' to={'cart'}>
						<CartIcon $itemCount={cartCount()}>
							<svg className='cart' viewBox='-1 0 37 32' height='20' width='20' fill='#686b78'>
								<path d='M4.438 0l-2.598 5.11-1.84 26.124h34.909l-1.906-26.124-2.597-5.11z'></path>
							</svg>
							<span>{cartCount()}</span>
						</CartIcon>
						<span>Cart</span>
					</Link>
				</Flex>
			</Flex>
		</StyledHeader>
	);
};

export default HeaderComponent;
