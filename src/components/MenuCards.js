import React from 'react';
import CONSTANTS from '../utils/constant';
import { Button } from './styles/Button.styled';

const MenuCardsComponent = ({ category }) => {
	return (
		<div className='menu-items'>
			{category?.itemCards?.map((eachCard) => {
				return (
					<div className='menu-item' key={eachCard.card?.info?.id}>
						<div className='menu-info'>
							<h3 className='menu-name font-bold text-xl'>{eachCard.card?.info?.name}</h3>
							<h4 className='menu-price font-bold text-base'>
								{eachCard.card?.info?.finalPrice ? (
									<React.Fragment>
										<span className='strikethrough'>₹{eachCard.card?.info?.price / 100}</span>
										<span>₹{eachCard.card?.info?.finalPrice / 100}</span>
									</React.Fragment>
								) : (
									<span>₹{eachCard.card?.info?.price / 100 || eachCard.card?.info?.defaultPrice / 100}</span>
								)}
							</h4>
							<div className='menu-desc'>{eachCard.card?.info?.description}</div>
						</div>
						{eachCard.card?.info?.imageId ? (
							<div className='relative'>
								<div className='absolute z-10 -bottom-3 left-0 right-0 mx-auto w-32'>
									<Button $bg='white' $text='rgb(74 222 128)' $hoverbg='rgb(229 231 235)' $border='rgb(156 163 175)' className='w-full'>
										Add
									</Button>
								</div>
								<img src={CONSTANTS.CLOUDANARY_LOCATION + eachCard.card?.info?.imageId} alt='Image' className='border border-gray-200' />
							</div>
						) : (
							<div></div>
						)}
					</div>
				);
			})}
		</div>
	);
};

export default MenuCardsComponent;
