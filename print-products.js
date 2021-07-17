const sqlite3 = require('sqlite3').verbose();

// connecting to the db
let db = new sqlite3.Database('first.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to db');
});

// fire select query
db.serialize(() => {
    db.each(`SELECT * FROM PRODUCTS`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.table(row);
    });
});

// close connector
db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});
