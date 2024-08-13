import { Link, useNavigate } from 'react-router-dom';
import CONSTANTS from '../utils/constant';

const RestaurantCard = (props) => {
	const { id, name, cloudinaryImageId, avgRating, cuisines, costForTwo, locality, areaName, sla } = props.resDetails.info;
	const handleNavigation = (route) => {
		useNavigate()(route);
	};

	return (
		<Link className='res-card' to={'/restaurants/' + id}>
			<img title={'res-card-image-' + props.index} src={CONSTANTS.CLOUDANARY_LOCATION + cloudinaryImageId} alt='Image-1' />
			<div className='res-details'>
				<h3 className='restaurant-name'>{name}</h3>
				<p className='res-type'>{cuisines.join(', ')}</p>
				<p className='res-address'>{locality + ', ' + areaName}</p>
				<p className='res-rating'>
					{avgRating} Stars - <b>{sla.slaString}</b>
				</p>
				<p className='res-costForTwo'>{costForTwo}</p>
			</div>
		</Link>
	);
};

module.exports = { RestaurantCard };
