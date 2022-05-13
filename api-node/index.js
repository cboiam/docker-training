const express = require('express')
const sql = require("mssql")
const app = express()
const port = 3000

app.get('/', async (req, res) => {

    try {
        const connection = await sql.connect({
            user: 'sa',
            password: 'Password@123',
            server: 'localhost',
            database: 'master',
            port: 1433,
            options: {
                encrypt: true,
                trustServerCertificate: true
            }
        })
        message = "connected"
        connection.close()
    } catch (error) {
        console.log(error)
        message = "not connected"
    }
  
    res.send({ message })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})