var sqlite3 = require('sqlite3').verbose()

let dbFile = './aust_db.sqlite';
let db = new sqlite3.Database(dbFile);



module.exports = db
