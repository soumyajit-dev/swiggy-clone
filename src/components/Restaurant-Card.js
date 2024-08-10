import CONSTANTS from '../Utils/constant';

const RestaurantCard = (props) => {
	console.log(props);
	return (
		<div className='res-card'>
			<img title={'res-card-image-' + props.index} src={CONSTANTS.CLOUDANARY_LOCATION + props.resDetails.image} alt='Image-1' />
			<div className='res-details'>
				<h3 className='resturent-name'>{props.resDetails.resturentName}</h3>
				<p className='res-type'>{props.resDetails.resType}</p>
				<p className='res-address'>{props.resDetails.resAddress}</p>
				<p className='res-address'>{props.resDetails.rating} Stars</p>
			</div>
		</div>
	);
};

module.exports = { RestaurantCard };
