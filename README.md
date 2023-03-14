//EXPRESS 라우팅 기초 공부

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("This is 짱구's list homepage!!")
})

app.get('/person1', (req, res) => {
    res.send({name: '짱구', age: 6})
})

app.post('/person1', (req, res) => {
    res.send({name: '짱구', age: 6, girlfriend: '유리'})
})

app.get('/person2', (req, res) => {
    res.send({name: '철수', age: 6})
})

app.get('/person3', (req, res) => {
    res.send({name: '유리', age: 6})
})

app.post('/person3', (req, res) => {
    res.send({name: '유리', age: 6, boyfriend: '짱구'})
})

app.post('*', (req, res) => {
    res.send("THAT IS ERROR")
})
app.listen(8080, () => {
    console.log("The second server port 8080!")
})
