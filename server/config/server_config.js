const dotenv = require('dotenv');
dotenv.config();

const envVariables = {
	PORT: process.env.PORT || 3000,
	SWIGGY_BASE_URL: process.env.SWIGGY_BASE_URL,
};

module.exports = envVariables;
