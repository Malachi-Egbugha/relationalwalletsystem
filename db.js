const Pool = require("pg").Pool;
const {Client} = require('pg');

const client = new Client({
    user: "postgres",
    password: "Maeg/1987",
    host: "localhost",
    port: 5432,
    database: "perntodo"

})


const pool = new Pool({
    user: "postgres",
    password: "Maeg/1987",
    host: "localhost",
    port: 5432,
    database: "perntodo",
    max: 20
})

module.exports = pool
 //module.exports = client;
 
//client.connect();