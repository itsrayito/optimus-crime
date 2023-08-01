const { Schema, model } = require('mongoose');

const bcrypt = require('bcrypt');

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment'
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// this will set up the middleware to create password
UserSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
})

// this will compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
}

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
})

// this is going to create the User model using the userSchema
const User = model('User', userSchema);