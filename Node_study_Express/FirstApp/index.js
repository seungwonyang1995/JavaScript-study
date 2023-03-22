const express = require('express')
const app = express()

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send({name: 'David', age: 29})
// })
app.get('/', (req, res) => {
    res.send('Welcome to MY HOMEPAGE!!!!')
})

app.get('/t/:tweets/:postId', (req, res) => {
    const { tweets, postId } = req.params
    res.send(`<h1>Viewing Post ID: ${postId}</h1> <h2>THIS IS A ${tweets} TWEETS</h2>`)
})
app.post('/ramens', (req, res) => {
    res.send("I Love Jinramen")
})
app.get('/ramens', (req, res) => {
    res.send('Korea Ramen is so coool!')
})

app.get('/chickens', (req, res) => {
    res.send('BBQ is the best korean chicken brand')
})

app.get('/search', (req, res) => {
    const {q} = req.query;
    res.send(`<h3> Search results for: ${q}</h3>`)
})

app.get('*', (req, res) => {
    res.send('That is not good PATH!!')
})


app.listen(3000, () => {
    console.log("LISTENING ON YOUR PORT 3000!")
})
