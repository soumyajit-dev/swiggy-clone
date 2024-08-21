import { useEffect, useState } from 'react';

const UserComponent = ({ userDetails }) => {
	const [image] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_JlCFnIGX5omgjEjgV9F3sBRq14eTERK9w&s');
	const [userInfo, setUserInfo] = useState(userDetails);

	useEffect(() => {
		fetchUserData();
		const a = setInterval(() => {
			console.log('Interval');
		}, 1000);
		return () => {
			clearInterval(a);
			console.log('Component Will Destroy');
		};
	}, []);

	async function fetchUserData() {
		const data = await fetch('https://api.github.com/users/' + userDetails.id);
		const json = await data.json();

		setUserInfo(json);
	}

	const { avatar_url, bio, name, email, number, location } = userInfo;

	return (
		<div className='user-card'>
			<img src={avatar_url ?? image} alt='Image' />
			<div>
				<h1>{name}</h1>
				<h3>{bio}</h3>
				<h4>{location}</h4>
				<h4>{email}</h4>
				<h4>{number}</h4>
			</div>
		</div>
	);
};

export default UserComponent;
