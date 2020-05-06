const express = require('express');
const morgan = require('morgan');
const layout = require('./views/layout');
const app = express();
const PORT = 3000;
const models = require('./models/');
const wikiRoutes = require('./routes/wiki');
const userRoutes = require('./routes/user');

app.use(express.static(__dirname + '/public'));

app.use('/wiki', wikiRoutes);

app.use('/users', userRoutes);

app.get('/', (req, res) => {
    res.redirect('/wiki');
});

const init = async() => {
    await models.db.sync();

    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
    });
};

init();