const express = require('express');
const router = express.Router();
const { Page } = require('../models');
const addPage = require('../views/addPage');

// body parser middleware
router.use(express.urlencoded({ extended: false }));

router.get('/', async(req, res, next) => {
    try {
        res.send('WIKI1');
    } catch (error) {
        next(error);
    }
});

router.post('/', async(req, res, next) => {
    function generateSlug(title) {
        // Removes all non-alphanumeric characters from title
        // And make whitespace underscore
        return title.replace(/\s+/g, '_').replace(/\W/g, '');
    }
    const page = new Page({
        title: req.body.title,
        content: req.body.content,
        slug: generateSlug(req.body.title),
    });
    console.log(page);
    try {
        res.json(req.body);
    } catch (error) {
        next(error);
    }
});

router.get('/add', async(req, res, next) => {
    try {
        res.send(addPage());
    } catch (error) {
        next(error);
    }
});

module.exports = router;