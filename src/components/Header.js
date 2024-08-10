import CONSTANTS from '../Utils/constant';

const Header = () => {
	return (
		<div className='header'>
			<img title='logo' className='logo' src={CONSTANTS.LOGO_URL} alt='Logo' />
			<div className='nav-items'>
				<span>Home</span>
				<span>About Us</span>
				<span>Offers</span>
				<span>Cart</span>
			</div>
		</div>
	);
};

export default Header;
