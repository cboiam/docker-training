const express = require('express')
const sql = require("mssql")
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', async (req, res) => {

    try {
        const connection = await sql.connect({
            user: 'sa',
            password: 'Password@123',
            server: 'sqlserver',
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