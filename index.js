const express = require('express') 
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const db = require('./conection')
const response = require('./response')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    const sql = "SELECT * FROM mahasiswa"
    db.query(sql, (error, result) => {
        // hasil/output data mysql
        console.log(result)
        response(200, result, "ambil data semua mahasiswa", res)
    })  

})

app.get('/find', (req, res) => {
     const sql = `SELECT nama_lengkap FROM mahasiswa WHERE nim  = ${req.query.nim}`
    db.query(sql, (error, result) => {
    response(200, result, "get find mahasisawa name", res)
    })
})

app.post('/login', (req, res) => {
        console.log({ requestFromOutside: req.body})
        // const username = req.body.username
        // if(username === usernameFromDbExits){
        //     res.status(400).send("username tidak dapat digunakan")
        // }
        res.send('login berhasil')
})

app.put('/username', (req, res) => {
    console.log ({ updateData: req.body})
    res.send('update berhasil')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})     