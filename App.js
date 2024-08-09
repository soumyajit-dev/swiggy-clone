import React from 'react';
import ReactDOM from 'react-dom/client';

const cloudanaryLocation = 'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

const resturentDetails = [
	{
		id: 1,
		image: '49845b494b1e637209b7bd1c7ca184ad',
		resturentName: 'Burger King',
		resType: 'Burgers, American',
		resAddress: 'Basavanagudi',
	},
	{
		id: 2,
		image: 'e0839ff574213e6f35b3899ebf1fc597',
		resturentName: 'Havmor Havfunn Ice',
		resType: 'Burgers, American',
		resAddress: 'Basavanagudi',
	},
	{
		id: 3,
		image: '1d578bb732e03c6f591790eb7d2d88e2',
		resturentName: 'Burger King',
		resType: 'Burgers, American',
		resAddress: 'Basavanagudi',
	},
	{
		id: 4,
		image: 'pzurfp2loj6clpoeuyqt',
		resturentName: 'Burger King',
		resType: 'Burgers, American',
		resAddress: 'Basavanagudi',
	},
	{
		id: 5,
		image: 's2guefjyf6zplthuzkzg',
		resturentName: 'Burger King',
		resType: 'Burgers, American',
		resAddress: 'Basavanagudi',
	},
	{
		id: 6,
		image: 'nfieyqgxk1omknxfbluj',
		resturentName: 'Burger King',
		resType: 'Burgers, American',
		resAddress: 'Basavanagudi',
	},
];

const HeaderComponent = () => {
	return (
		<div className='header'>
			<img
				title='logo'
				className='logo'
				src='https://images.yourstory.com/cs/images/companies/logosC141575978425306png?fm=auto&ar=1%3A1&mode=fill&fill=solid&fill-color=fff&format=auto&w=384&q=75'
				alt='Logo'
			/>
			<div className='nav-items'>
				<span>Home</span>
				<span>About Us</span>
				<span>Offers</span>
				<span>Cart</span>
			</div>
		</div>
	);
};

const ResturentCardComponent = (props) => {
	console.log(props);
	return (
		<div className='res-card'>
			<img title={'res-card-image-' + props.index} src={cloudanaryLocation + props.resDetails.image} alt='Image-1' />
			<div className='res-details'>
				<h3 className='resturent-name'>{props.resDetails.resturentName}</h3>
				<p className='res-type'>{props.resDetails.resType}</p>
				<p className='res-address'>{props.resDetails.resAddress}</p>
			</div>
		</div>
	);
};

const BodyComponent = () => {
	return (
		<div className='main-container'>
			<div className='search-bar'>
				<input title='search-input' className='search-input' type='text' />
				<button type='button' title='search-button' className='search-button'>
					Search
				</button>
			</div>
			<div className='resturent-container'>
				{resturentDetails.map((eachRes, index) => (
					<ResturentCardComponent key={eachRes.id} resDetails={eachRes} index={index}></ResturentCardComponent>
				))}
			</div>
		</div>
	);
};

const AppLayout = () => {
	return (
		<div className='app'>
			<HeaderComponent></HeaderComponent>
			<BodyComponent></BodyComponent>
		</div>
	);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout />);
