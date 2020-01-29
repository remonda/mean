/*
 * others.js
 * Copyright (C) 2020 maysmac <maysmac@maysmacdeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */

const about = (req, res, next) => {
    res.render('generic-text', {title: 'About', content: 'This is about page'});
};

module.exports = {
    about
};

