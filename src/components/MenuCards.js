import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../redux/store/cartSlice';
import CONSTANTS from '../utils/constant';
import { AddedMenuButton } from './styles/AddedMenuButton';
import { Button } from './styles/Button.styled';
import { Flex } from './styles/Flex.styled';
import { MenuInfo, MenuItem, Strikethrough } from './styles/RestaurantMenu.styled';

const MenuCardsComponent = ({ category }) => {
	const dispatch = useDispatch();
	const cartedItems = useSelector((store) => store.cart.items);

	const findCartedItem = (itemToFind) => cartedItems.find((each) => each.item.id === itemToFind.id);

	const handleAddItem = (item) => {
		// Dispatch an action
		dispatch(addItemToCart(item));
	};

	const handleRemoveItem = (item) => {
		dispatch(removeItemFromCart(item));
	};

	return (
		<>
			{category?.itemCards?.map((eachCard) => {
				const item = eachCard?.card?.info;

				return (
					<MenuItem key={item?.id}>
						<MenuInfo>
							<h3 className='font-bold text-xl'>{item?.name}</h3>
							<h4 className='font-bold text-base'>
								{item?.finalPrice ? (
									<React.Fragment>
										<Strikethrough>₹{item?.price / 100}</Strikethrough>
										<span>₹{item?.finalPrice / 100}</span>
									</React.Fragment>
								) : (
									<span>₹{item?.price / 100 || item?.defaultPrice / 100}</span>
								)}
							</h4>
							<div>{item?.description}</div>
						</MenuInfo>
						<div className='relative'>
							<div className={item?.imageId ? 'absolute z-10 -bottom-3 left-0 right-0 mx-auto w-32' : 'w-32'}>
								{(() => {
									const itemsFound = findCartedItem(item);
									return itemsFound?.quantity > 0 ? (
										<AddedMenuButton $border='rgb(156 163 175)'>
											<Flex $justify='space-between'>
												<button
													onClick={() => {
														handleRemoveItem(item);
													}}>
													-
												</button>
												<span>{itemsFound.quantity}</span>
												<button
													onClick={() => {
														handleAddItem(item);
													}}>
													+
												</button>
											</Flex>
										</AddedMenuButton>
									) : (
										<Button $bg='white' $text='rgb(74 222 128)' $hoverbg='rgb(229 231 235)' $border='rgb(156 163 175)' className='w-full' onClick={() => handleAddItem(item)}>
											Add
										</Button>
									);
								})()}
							</div>
							{item?.imageId && <img src={CONSTANTS.CLOUDANARY_LOCATION + item?.imageId} className='border border-gray-200' />}
						</div>
					</MenuItem>
				);
			})}
		</>
	);
};

export default MenuCardsComponent;
