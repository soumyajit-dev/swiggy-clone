import { Link, useNavigate } from 'react-router-dom';
import CONSTANTS from '../utils/constant';

const RestaurantCard = (props) => {
	const { id, name, cloudinaryImageId, avgRating, cuisines, costForTwo, locality, areaName, sla } = props.resDetails.info;
	const handleNavigation = (route) => {
		useNavigate()(route);
	};

	return (
		<Link className='res-card' id={'res-card-' + props.index} to={'/restaurants/' + id}>
			<img title={'res-card-image-' + props.index} src={CONSTANTS.CLOUDANARY_LOCATION + cloudinaryImageId} alt='Image-1' className='rounded-lg w-full h-52' />
			<div className='p-2 leading-6'>
				<h2 className='text-xl mb-3 font-bold'>{name}</h2>
				<p className='text-[0.8rem] font-bold'>
					{cuisines.slice(0, 3).join(', ')}
					{cuisines?.length > 3 ? '...' : null}
				</p>
				<p className='text-[0.8rem]'>{locality + ', ' + areaName}</p>
				<h3 className='text-[0.9rem]'>
					{avgRating} Stars - <b>{sla.slaString}</b>
				</h3>
				<h3 className='text-[0.9rem]'>{costForTwo}</h3>
			</div>
		</Link>
	);
};

module.exports = { RestaurantCard };
