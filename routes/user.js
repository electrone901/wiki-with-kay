const express = require('express');
const router = express.Router();

router.use(express.urlencoded({ extended: false }));

router.get('/', async(req, res, next) => {
    try {
        res.send(' get all users');
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async(req, res, next) => {
    try {
        res.send('get user');
    } catch (error) {
        next(error);
    }
});

router.post('/', async(req, res, next) => {
    try {
        res.send('Post user');
    } catch (error) {
        next(error);
    }
});

router.put('/:id', async(req, res, next) => {
    try {
        res.send('edit user');
    } catch (error) {
        next(error);
    }
});

module.exports = router;