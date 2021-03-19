const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const helmet = require('helmet')
const keys = require('./keys')

const app = express()

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))

app.use(cookieParser())
app.use(helmet())

app.use('/api/auth', require('./routes/auth'))
app.use('/api/todos', require('./routes/todo'))

const PORT = keys.port || 5000

async function start() {
    try {
        await mongoose.connect(keys.mongoUri, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })

        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch (e) {
        console.error(e)
        process.exit(1)
    }
}

start()
