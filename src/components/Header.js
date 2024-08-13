import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CONSTANTS from '../utils/constant';

const HeaderComponent = () => {
	let [isUserSignedIn, setIsUserSignedIn] = useState(false);

	return (
		<div className='header'>
			<Link to={'home'}>
				<img title='logo' className='logo' src={CONSTANTS.LOGO_URL} alt='Logo' />
			</Link>
			<div className='nav-items'>
				<Link className='item' to={'home'}>
					Home
				</Link>
				<Link className='item' to={'about'}>
					About Us
				</Link>
				<Link className='item' to={'contact'}>
					Contact Us
				</Link>
				<Link
					className='item'
					onClick={() => {
						setIsUserSignedIn(!isUserSignedIn);
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
							<p>Logout</p>
						</>
					)}
				</Link>
				<Link className='item'>Cart</Link>
			</div>
		</div>
	);
};

export default HeaderComponent;
