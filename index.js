require('dotenv').config()
const express = require('express') // require module syntax
const app = express() // here all functionality of express() is stored in app
const port = 3000 // we use a port

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login',(req, res) => {
    res.send('<h1> Hii I am Zabed </h1>')
})

app.get('/youtube',(req, res) => {
    res.send('<h2>Backend</h2>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})

