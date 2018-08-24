const pg = require('pg-promise')();
const db = pg('postgres://matt@localhost:5432/flutter');

let listAllUsers = () => {
    return db.query(`select * from users`)
}

let listAllFlutters = () => {
    return db.query(`select * from flutters`)
}

let allFluttersByUser = (user) => {
    return db.query(`select us.name, pst.postdate, pst.body
            FROM users us
            INNER JOIN flutters pst on us.id = pst.userid
            AND us.name = '` + user + `'`);
}

let oneFlutterByUser = (user, postid) => {
    return db.one(`select us.name, pst.postdate, pst.body
            FROM users us
            INNER JOIN flutters pst on us.id = pst.userid
            AND us.name = '` + user + `'
            AND pst.postid = '` + postid + `';`)
}

exports.listAllUsers = listAllUsers;
exports.listAllFlutters = listAllFlutters;
exports.allFluttersByUser = allFluttersByUser;
exports.oneFlutterByUser = oneFlutterByUser;


