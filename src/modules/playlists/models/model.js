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
    channeltitle: {
        type: String
    },
    player: {
        type: String,
        required: 'Player is required'
    },
    playerid: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    rating: {
        type: Number,
        default: 0
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