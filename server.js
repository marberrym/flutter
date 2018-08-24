// Get /users => JSON list of all registered users
// post /users => takes some JSON creates new user in database.
// ger /users/id => spit out JSON object of user info.
// get /users/id/squabs => JSON list of squabs by this user

// get /squabs => JSON list of all squabs by all users
// get /squabs/id => JSON object of specific squabs
// post /squabs => takes some json and create a new squab

let users = [
    {id: '1', name: 'Jaydoe', email: 'jayjay@jay.com'},
    {id: '2', name: 'XXXTentacion', email:'sonotdead@hiphop.com'}
]

let flutters = [
    {userid: '1', id: '1', body: 'I like coffee'},
    {userid: '2', id: '2', body: `I'm not dead yet`},
    {userid: '1', id: '3', body: 'I like coffee'},
    {userid: '2', id: '4', body: `I'm not dead yet`}
]

const express = require('express');
let ex = express();

ex.listen(3000);

let authenticate = (req, res, next) => {
    if (req.query.password === 'opensesame') {
        next();
    } else {
        res.end('You shall not pass');
    }
}

let getUsers = (req, res) => {
        res.send(users);
}

let fluttersByUser = (req, res) => {
        let userID = req.params.userID;
        let userFlutters = flutters.filter(flutter => {
            return flutter.userid === userID
        });
        res.send(userFlutters)
}

ex.get('/users', authenticate, getUsers);
ex.get('/users/:userID/flutters', authenticate, fluttersByUser);