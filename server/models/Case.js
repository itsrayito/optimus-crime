const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const mediaSchema = require('./Media');
const dateFormat = require('../utils/dateFormat');

const CaseSchema = new Schema({
    caseTitle: {
        type: String,
        required: 'This case needs to have a title',
        minlength: 1,
        maxlength: 120
    },

    caseDescription: {
        type: String,
        required: 'This case needs to have a story',
        minlength: 1,
        maxlength: 500
    },
    caseStartDate: {
        type: Date,
        required: true,
    },
    caseStatus: {
        type: String,
        required: true,
        default: 'Unsolved'
    },
    caseAuthor: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    media: [mediaSchema],
    comments: [commentSchema]
},
{
        toJSON: {
            getters: true
        }
});

caseSchema.virtual('commentCount').get(function() {
    return this.comments.length;
})

// this will create the Case model using the caseSchema
const Case = model('Case', caseSchema)

module.exports = Case;