const mongoose = require('mongoose');
const { Schema } = mongoose;

const ContentSchema = new Schema({

    name:{
        type: String,
        required: true
    },

    content:{
        type: String,
        required: true, 
    },

    url:{
        type: String,
        // required : true
    },

    size:{
        type: String,
        // required : true
    },

    type:{
        type: String,
        // required : true
    },

  });

  module.exports = mongoose.model('content', ContentSchema);