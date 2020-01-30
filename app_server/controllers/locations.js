/*
 * locations.js
 * Copyright (C) 2020 maysmac <maysmac@maysmacdeMacBook-Pro.local>
 *
 * Distributed under terms of the MIT license.
 */

const homelist = (req, res, next) => {
    res.render('locations-list', {
        title: 'Loc8r - find a place to work with free wifi',
        pageHeader: {
            title: 'Loc8r',
            strapline: 'Find places to work with wifi near you!'
        },
        sidebar: "Looking for wifi and a seat? \
            Loc8r helps you find places to work when out and about. \
            Perhaps with coffee, cake or a pint? \
            Let Loc8r help you find the place you 're looking for.",
        locations: [{
                name: 'Starcups',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '100m'
            },
            {
                name: 'Cafe Hero',
                address: '125 High Street, Reading, RG6 12PS',
                rating: 4,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                distance: '200m'
            },
            {
                name: 'Burger Queen',
                address: '125 High Street, Reading, RG8 1PS',
                rating: 2,
                facilities: ['Food', 'Premium wifi'],
                distance: '250m'
            }
        ]
    });
};

const locationInfo = (req, res, next) => {
    res.render('location-info', {
        title: 'Loc8r - find a place to work with free wifi',
        locationInfo: {
            name: 'Starcups',
            rating: 3,
            strapline: 'Find places to work with wifi near you!',
            address: '125 High Street, Reading, RG6 1PS',
            coords: [-0.9690884, 51.455041],
            openingHours: [{
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                },
                {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                },
                {
                    days: 'Sunday',
                    closed: true
                }
            ],
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            img: '7f11530a610e61d57a1a78401c20614b.jpeg',
            reviews: [{
                    rating: 5,
                    author: 'Simon Holmes',
                    timestamp: '16 February 2017',
                    content: 'What a great place.'
                },
                {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '16 June 2013',
                    content: 'It was okay. Coffee wasn\'t great,\n but the wifi was fast.'
                }
            ]
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        }

    });
};

const addReview = (req, res, next) => {
    res.render('location-review-form', {
        title: 'addReview',
        content: 'This is addReview page'
    });
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};