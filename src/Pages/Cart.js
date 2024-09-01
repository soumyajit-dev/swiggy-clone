import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button } from '../Components/styles/Button.styled';
import { Cart, CartFooter, CartItem, EmptyCart } from '../Components/styles/Cart.styled';
import { Flex } from '../Components/styles/Flex.styled';
import { Grid } from '../Components/styles/Grid.styled';
import { Heading } from '../Components/styles/Heading.styled';
import { Icon } from '../Components/styles/Icon.styled';
import { addItemToCart, clearSpecificCartItem, removeItemFromCart } from '../Services/Store/cartSlice';
import CONSTANTS from '../Utils/constant';

const CartComponent = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();

	const getTotalPrice = () => {
		return cartItems.reduce((acc, curr) => (acc = acc + (curr?.item?.price / 100 || curr?.item?.defaultPrice / 100) * curr.quantity), 0);
	};

	return (
		<Cart>
			{cartItems?.length > 0 ? (
				<React.Fragment>
					<Heading>Personalized Cart</Heading>
					{cartItems.map((eachItem) => {
						return (
							<CartItem key={eachItem?.item?.id}>
								<Flex $justify='space-between'>
									<img className='img' src={CONSTANTS.CLOUDANARY_LOCATION + eachItem?.item?.imageId} alt='' />
									<div className='desc'>
										<h5>{eachItem?.item?.category}</h5>
										<h2>{eachItem?.item?.name}</h2>
										<h6>{eachItem?.item?.description}</h6>
									</div>
									<div className='increment-button'>
										<Flex $justify='space-between'>
											<button
												onClick={() => {
													dispatch(removeItemFromCart(eachItem?.item));
												}}>
												-
											</button>
											<span>{eachItem?.quantity}</span>
											<button
												onClick={() => {
													dispatch(addItemToCart(eachItem?.item));
												}}>
												+
											</button>
										</Flex>
									</div>
									<h3>₹{eachItem?.item?.price / 100 || eachItem?.item?.defaultPrice / 100}</h3>
									<Icon
										src={process.env.imagesBasePath + 'cross-icon.svg'}
										onClick={() => {
											dispatch(clearSpecificCartItem(eachItem.item));
										}}
									/>
								</Flex>
							</CartItem>
						);
					})}
					<CartFooter>
						<Flex $justify='space-between'>
							<Link to={'/home'}>
								<Flex $justify='space-between' $gap='10px'>
									<Icon src={process.env.imagesBasePath + 'arrow-left.svg'} />
									<span>Back to Dashboard</span>
								</Flex>
							</Link>
							<Flex $justify='space-between' className='price'>
								Total: <h2>₹{getTotalPrice()}</h2>
							</Flex>
						</Flex>
					</CartFooter>
				</React.Fragment>
			) : (
				<EmptyCart>
					<Grid className='m-auto'>
						<img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0' />
						<div>
							<h2>Your cart is empty</h2>
							<h3>You can go to home page to view more restaurants</h3>
						</div>
						<Button>
							<Link to={'/home'}>See Restaurant Near Me</Link>
						</Button>
					</Grid>
				</EmptyCart>
			)}
		</Cart>
	);
};

export default CartComponent;
