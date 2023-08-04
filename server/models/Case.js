const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');
const dateFormat = require('../utils/dateFormat');

const CaseSchema = new Schema({
    caseTitle: {
        type: String,
        required: 'This case needs to have a title',
        minlength: 1,
        maxlength: 120
    },

    caseSummary: {
        type: String,
        required: 'The case must have a summary',
        minlength: 1,
        maxlength: 500
    },

    caseDescription: {
        type: String,
        required: 'The case must have a story',
        minlength: 1,
        maxlength: 10000
    },
    caseStartDate: {
        type: Date,
        required: true,
        get: timestamp => dateFormat(timestamp)
    },
    caseStatus: {
        type: String,
        required: true,
        default: 'Unsolved'
    },
    userName: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    },
    comments: [commentSchema]
},
{
        toJSON: {
            getters: true
        }
});

CaseSchema.virtual('commentCount').get(function() {
    return this.comments.length;
})

// this will create the Case model using the caseSchema
const Case = model('Case', CaseSchema)

module.exports = Case;