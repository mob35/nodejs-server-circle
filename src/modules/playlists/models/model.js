'use strict';

var Model = "Playlist";
exports.model = Model;
// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ModelSchema = new Schema({
    title: {
        type: String
    },
    player: {
        type: String
    },
    rating: {
        type: Number,
        default: 0
    },
    artist: {
        type: String
    },
    album: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
});

mongoose.model(Model, ModelSchema);