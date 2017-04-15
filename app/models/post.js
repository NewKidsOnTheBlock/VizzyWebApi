'use strict'

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PostSchema   = new Schema({
    message: String,
    posted: {type: Date, default: Date.now},
    vizzy: Schema.Types.Mixed
});

module.exports = mongoose.model('Post', PostSchema);
