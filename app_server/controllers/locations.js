/*
 * locations.js
 * Copyright (C) 2020 maysmac <maysmac@maysmacdeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */

const homelist = (req, res, next) => {
    res.render('locations-list', {title: 'Home', content: 'This is homelist page'});
};

const locationInfo = (req, res, next) => {
    res.render('location-info', {title: 'locationInfo', content: 'This is content page'});
};

const addReview = (req, res, next) => {
    res.render('location-review-form', {title: 'addReview', content: 'This is addReview page'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};

