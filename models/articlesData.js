const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
 url: {type: String, required: true},
title: {type: String, required: true} 
});

const Model = mongoose.model("Article", articleSchema);

module.exports = Model