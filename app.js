const express = require('express')
const app = express()
const connectToDb = require('./config/db')
const categoryRouter = require('./routes/category')
const movieRouter = require('./routes/movie')

app.use(express.json())

connectToDb()

app.use('/api/categories', categoryRouter)
app.use('/api/movies', movieRouter)

app.listen(3080, () => {
    console.log('server running on http://localhost:3080')
})
