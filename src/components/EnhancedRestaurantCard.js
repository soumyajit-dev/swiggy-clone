export const enhancedRestaurantCard = (OriginalComponent) => {
	return (props) => {
		return (
			<div className='res-card'>
				<label htmlFor={'res-card-' + props.index} className='p-2 absolute bg-black text-white m-2 ml-[-5] rounded-md font-bold'>
					Promoted
				</label>
				<OriginalComponent {...props} />
			</div>
		);
	};
};
