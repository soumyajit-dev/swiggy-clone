import { createContext } from 'react';

const UserContext = createContext({
	context: {
		loggedInUser: null,
	},
	setContext: () => {},
});

export default UserContext;
