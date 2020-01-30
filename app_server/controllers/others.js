/*
 * others.js
 * Copyright (C) 2020 maysmac <maysmac@maysmacdeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */

const about = (req, res, next) => {
    res.render('generic-text', {
        title: 'About',
        content: 'Loc8r was created to help people find places to sit down and get a bit of work done.\
        \n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Nuncsed lorem ac nisi dignissim accumsan.'
    });
};

module.exports = {
    about
};