const PORT = 8080;
const express = require('express');
const cors = require('cors');
const path = require('path');
const routers = require('./routes');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(routers);
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/*path', (req, res) => {
	res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
