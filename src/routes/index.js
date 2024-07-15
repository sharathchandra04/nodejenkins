const express = require('express');
const axios = require('axios');

const router = express.Router();

// Example route: GET /api/
router.get('/', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

// Example route: GET /api/data
router.get('/data', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});

module.exports = router;

