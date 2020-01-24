/*
 * main.js
 * Copyright (C) 2020 maysmac <maysmac@maysmacdeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */

const index = (req, res, next) => {
    res.render('index', { title: 'Express', content: 'This is my first express page'});
};

module.exports = {
    index
};
