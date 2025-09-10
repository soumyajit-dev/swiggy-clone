const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./routes');
const { PORT } = require('./config/server_config');
const path = require('path');

const app = express();

var corsOptions = {
	origin: ['*'],
	optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(router);

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/*path', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
