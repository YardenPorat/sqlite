const sqlite3 = require('sqlite3').verbose();

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('Insert ID of a product to print:\n', (id) => {
    console.log(`Print data for id: ${id}`);
    printId(id);
    readline.close();
});

function printId(id) {
    // connecting to the db
    let db = new sqlite3.Database('first.db', (err) => {
        if (err) {
            console.error(err.message);
        }
    });

    // fire select query
    db.serialize(() => {
        db.each(
            `SELECT * FROM PRODUCTS
        WHERE ID=${id}`,
            (err, row) => {
                if (err) {
                    console.error(err.message);
                }
                console.table(row);
            }
        );
    });

    // close connector
    db.close((err) => {
        if (err) {
            console.error(err.message);
        }
    });
}
