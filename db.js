const {createPool} = require("mysql2/promise")

const pool = createPool({
    host:"localhost",
    user:'root',
    password:"1234",
    port:3306,
    database:"usersdb"
})

module.exports = pool