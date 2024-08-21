import React, { Component } from 'react';
import UserComponent from './User';

class AboutComponent extends Component {
	render() {
		const user = {
			id: 'debasish-khan',
			avatar_url: '',
			bio: '',
			name: '',
			email: '',
			number: '+91 8976543210',
			location: 'Kolkata',
		};

		return (
			<div className='about-us'>
				{Array(7)
					.fill(user)
					.map((each, index) => {
						return <UserComponent key={index} userDetails={each} />;
					})}
				{/* <UserClassComponent userDetails={user} /> */}
			</div>
		);
	}
}

// const AboutComponent = () => {
// 	const user = {
// 		name: 'Soumyajit Sarkar',
// 		email: 'soumyajit.9614@gmail.com',
// 		number: '+91 8976543210',
// 		location: 'Kolkata',
// 	};
// 	return (
// 		<div className='about-us'>
// 			{Array(7)
// 				.fill(user)
// 				.map((each, index) => {
// 					return <UserComponent key={index} userDetails={each} />;
// 				})}
// 			<UserClassComponent userDetails={user} />
// 		</div>
// 	);
// };

export default AboutComponent;
