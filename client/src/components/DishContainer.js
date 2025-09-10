import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addItemToCart, removeItemFromCart } from '../Services/Store/cartSlice';
import CONSTANTS from '../Utils/constant';
import { AddedMenuButton } from './styles/AddedMenuButton';
import { Button } from './styles/Button.styled';
import { DishContainer, DishHeader } from './styles/DishContainer.styled';
import { Flex } from './styles/Flex.styled';
import { Icon } from './styles/Icon.styled';

const DishContainerComponent = ({ detail }) => {
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
		detail['@type'] !== 'type.googleapis.com/swiggy.gandalf.widgets.v2.SearchFilterSortWidget' && (
			<DishContainer>
				<DishHeader>
					<Flex $justify='space-between'>
						<div>
							<h6>By {detail?.restaurant?.info?.name}</h6>
							<Flex $justify='flex-start' $gap='4px'>
								<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
									<path d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z' />
								</svg>
								<h6>{detail?.restaurant?.info?.avgRating}</h6>
								<div>.</div>
								<h6>{detail?.restaurant?.info?.sla?.slaString}</h6>
							</Flex>
						</div>
						<Link to={'/restaurants/' + detail?.restaurant?.info?.id}>
							<Icon src={process.env.imagesBasePath + 'arrow-pointer-right.svg'} />
						</Link>
					</Flex>
				</DishHeader>
				<Flex $justify='space-between' className='mb-4'>
					<div className='w-6/12'>
						<h2>{detail?.info?.name}</h2>
						<h2>₹{detail?.info?.price / 100}</h2>
					</div>
					<div className='relative w-6/12'>
						<div className={detail?.info?.imageId ? 'absolute z-10 -bottom-3 left-0 right-0 mx-auto w-32' : 'w-32'}>
							{(() => {
								const itemsFound = findCartedItem(detail?.info);
								return itemsFound?.quantity > 0 ? (
									<AddedMenuButton $border='rgb(156 163 175)'>
										<Flex $justify='space-between'>
											<button
												onClick={() => {
													handleRemoveItem(detail?.info);
												}}>
												-
											</button>
											<span>{itemsFound.quantity}</span>
											<button
												onClick={() => {
													handleAddItem(detail?.info);
												}}>
												+
											</button>
										</Flex>
									</AddedMenuButton>
								) : (
									<Button $bg='white' $text='rgb(74 222 128)' $hoverbg='rgb(229 231 235)' $border='rgb(156 163 175)' className='w-full' onClick={() => handleAddItem(detail?.info)}>
										Add
									</Button>
								);
							})()}
						</div>
						{detail?.info?.imageId && <img src={CONSTANTS.CLOUDANARY_LOCATION + detail?.info?.imageId} className='image' />}
					</div>
				</Flex>
			</DishContainer>
		)
	);
};

export default DishContainerComponent;
