const express = require('express');
const axios = require('axios');
const { default: CONSTANTS } = require('../../src/Utils/constant');

const routers = express.Router();

const SWIGGY_BASE_URL = CONSTANTS.SWIGGY_BASE_URL;

routers.get('/api/restaurants', async (req, res) => {
	try {
		const response = await axios.get(
			`${SWIGGY_BASE_URL}/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`,
			{
				headers: { 'User-Agent': 'Mozilla/5.0' },
			},
		);
		res.json(response.data);
	} catch (error) {
		res.status(error.response?.status || 500).json({ error: error.message });
	}
});

routers.get('/api/menu/:resId', async (req, res) => {
	try {
		const { resId } = req.params;
		const response = await axios.get(`${SWIGGY_BASE_URL}/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.96340&lng=77.58550&restaurantId=${resId}`, {
			headers: { 'User-Agent': 'Mozilla/5.0' },
		});
		res.json(response.data);
	} catch (error) {
		res.status(error.response?.status || 500).json({ error: error.message });
	}
});

routers.get('/api/restaurants/search/:searchText', async (req, res) => {
	try {
		const { searchText } = req.params;

		const response = await axios.get(`${SWIGGY_BASE_URL}/restaurants/search/suggest?lat=12.96340&lng=77.58550&str=${searchText}`, {
			headers: { 'User-Agent': 'Mozilla/5.0' },
		});
		res.json(response.data);
	} catch (error) {
		res.status(error.response?.status || 500).json({ error: error.message });
	}
});

routers.get('/api/landing', async (req, res) => {
	try {
		const response = await axios.get(`${SWIGGY_BASE_URL}/landing/PRE_SEARCH?lat=12.96340&lng=77.58550`, {
			headers: { 'User-Agent': 'Mozilla/5.0' },
		});
		res.json(response.data);
	} catch (error) {
		res.status(error.response?.status || 500).json({ error: error.message });
	}
});

routers.get('/api/restaurants/search/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const { queriedStr } = req.query;

		const response = await axios.get(
			`${SWIGGY_BASE_URL}/restaurants/search/v3?lat=12.96340&lng=77.58550&str=${queriedStr}&submitAction=ENTER&selectedPLTab=${id}`,
			{
				headers: { 'User-Agent': 'Mozilla/5.0' },
			},
		);
		res.json(response.data);
	} catch (error) {
		res.status(error.response?.status || 500).json({ error: error.message });
	}
});

routers.get('/api/restaurants/search', async (req, res) => {
	try {
		const { queriedStr } = req.query;

		const response = await axios.get(`${SWIGGY_BASE_URL}/restaurants/search/v3?lat=12.96340&lng=77.58550&str=${queriedStr}&submitAction=ENTER`, {
			headers: { 'User-Agent': 'Mozilla/5.0' },
		});
		res.json(response.data);
	} catch (error) {
		res.status(error.response?.status || 500).json({ error: error.message });
	}
});

module.exports = routers;
