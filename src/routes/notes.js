const express = require('express');
const router = express.Router();

router.get('/notes', (req, res) => {
    res.send('Notes friom database');
});

module.exports = router;