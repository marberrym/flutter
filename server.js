// Get /users => JSON list of all registered users
// post /users => takes some JSON creates new user in database.
// ger /users/id => spit out JSON object of user info.
// get /users/id/squabs => JSON list of squabs by this user

// get /squabs => JSON list of all squabs by all users
// get /squabs/id => JSON object of specific squabs
// post /squabs => takes some json and create a new squab
const q = require('./dataQueries');

let users = [
    {id: '1', name: 'Jaydoe', email: 'jayjay@jay.com', pw: 'shimmy'},
    {id: '2', name: 'XXXTentacion', email:'sonotdead@hiphop.com', pw: 'dondon'}
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
    let currentUser = users.find((user) => req.query.ident === user.id)
    console.log(currentUser);
    console.log(req.query)
    if (currentUser && req.query.pass === currentUser.pw) {
        next();
    } else {
        res.end('You shall not pass');
    }
}

let getUsers = (req, res) => {
    q.listAllUsers()
        .then(results => res.send(results))
}

let allFlutters = (req, res) => {
    q.listAllFlutters()
        .then(results => res.send(results))
}

let fluttersByUser = (req, res) => {
    let userN = req.params.username;
    q.allFluttersByUser(userN)
        .then(results => res.send(results))
}

let specificUserPost = (req, res) => {
    let userN = req.params.username;
    let postID = req.params.postid;
    console.log(req.params)
    q.oneFlutterByUser(userN, postID)
        .then(results => res.send(results))
}

ex.get('/users', authenticate, getUsers);
ex.get('/flutters', allFlutters);
ex.get('/users/:username/flutters', authenticate, fluttersByUser);
ex.get('/users/:username/:postid', authenticate, specificUserPost)

//ex.post(`/users/:username/flutters`), authenticate, 
