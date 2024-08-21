import React from 'react';

export class UserClassComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userInfo: this.props.userDetails,
			image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&s',
		};
	}

	async componentDidMount() {
		const data = await fetch('https://api.github.com/users/' + this.props.userDetails.id);
		const json = await data.json();

		this.setState(
			{
				userInfo: { ...this.state.userInfo, ...json },
			},
			() => {
				console.log(this.state.userInfo);
			}
		);
	}

	componentDidUpdate() {
		console.log('Component Did Update Called');
	}

	componentWillUnmount() {
		console.log('Component will destroy');
	}

	render() {
		const { avatar_url, bio, name, email, number, location } = this.state.userInfo;
		return (
			<div id='user-class' className='user-card'>
				<img src={avatar_url ?? this.state.image} alt='Image' />
				<div>
					<h1>{name}</h1>
					<h3>{bio}</h3>
					<h4>{location}</h4>
					<h4>{email}</h4>
					<h4>{number}</h4>
				</div>
			</div>
		);
	}
}

/*
 *
 * --------------- MOUNTING -----------------
 * Constructor
 * Render (Dummy)
 * ComponentDidMount
 * 	<API Call Happens>
 * 	setState Called - State veriable is updated
 * --------------- UPDATE ---------------------
 * Render (With Data from API)
 * ComponentDidUpdate
 *
 *
 
*/
