const { Schema, model } = require('mongoose');

const mediaSchema = new Schema(
    {
        mediaTitle: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 150
        },
        mediaDescription: {
            type: String,
            minlength: 1,
            maxlength: 280
        },
        mediaType: {
            type: String,
            required: true
        },
        mediaAuthor: {
            type: String,
            minlength: 1,
            maxlength: 100
        },
        mediaURL: {
            type: String,
            required: 'There has to be a URL for the media item',
            unique: true,
            match: [/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/, 'This must be a valid url']
        }
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

module.exports = mediaSchema;