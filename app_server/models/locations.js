const mongoose = require('mongoose');

const openingHourSchema = new mongoose.Schema({
    days: {
        type: String,
        required: true
    },
    opening: String,
    closing: String,
    closed: {
        type: Boolean,
        required: true
    }
});

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
        max: 5
    },
    author: String,
    timestamp: {
        type: Date,
        default: Date.now
    },
    content: String

});

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    address: String,
    rating: {
        type: Number,
        'default': 0,
        min: 0,
        max: 5
    },
    facilities: [String],
    coords: {
        type: { type: String },
        coordinates: [Number]
    },
    img: String,
    openingHours: [openingHourSchema],
    reviews: [reviewSchema]
});

locationSchema.index({ coords: '2dsphere' });

mongoose.model('Location', locationSchema);