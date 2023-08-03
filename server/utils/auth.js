const jwt = require('jsonwebtoken');

const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data:payload }, secret, { expiresIn:expiration });
    },

    authMiddleware: function({ req }) {
        // this will allow token to be sent via req.body, req,query, or headers
        let token = req.body.token || req.query.token || req.headers.authorization;

        // this separates "Bearer" from "<tokenvalue>"
        if (req.headers.authorization) {
            token = token
            .split(' ')
            .pop()
            .trim();
        }

        // if there is no token, this will return request object as is
        if (!token) {
            return req;
        }

        try {
            // this will decode and attach user data to request object
            const { data } = jwt.verify(token, secret, { maxAge: expiration });
            req.user = data;
        } catch {
            console.log('Invalid token');
        }

        // this will return updated request object
        return req;
    }
};