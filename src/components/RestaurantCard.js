import { Link, useNavigate } from 'react-router-dom';
import CONSTANTS from '../utils/constant';

const RestaurantCard = (props) => {
	const { id, name, cloudinaryImageId, avgRating, cuisines, costForTwo, locality, areaName, sla } = props.resDetails.info;
	const handleNavigation = (route) => {
		useNavigate()(route);
	};

	return (
		<Link className='res-card' id={'res-card-' + props.index} to={'/restaurants/' + id}>
			<img title={'res-card-image-' + props.index} src={CONSTANTS.CLOUDANARY_LOCATION + cloudinaryImageId} alt='Image-1' className='w-full h-52' />
			<div className='res-details'>
				<h3 className='restaurant-name font-bold'>{name}</h3>
				<p className='res-type font-bold'>
					{cuisines.slice(0, 3).join(', ')}
					{cuisines?.length > 3 ? '...' : null}
				</p>
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
