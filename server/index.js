const express = require('express')
const {graphqlHTTP} = require('express-graphql')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

 const items = require('./routes/api/items')
 const users = require('./routes/api/User')
 const movies = require('./routes/api/Movie')
const schema = require('./schema/schema')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 4000

app.use(cors())


//Bodyparser Middleware

app.use(bodyParser.json())

// DB Config

const db = require('./config/keys').mongoURI

//Connect to Mongo

mongoose.connect(db)
.then(()=> console.log('MongoDB Connnected'))
.catch(err=> console.log(err));

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}))

//Use Routes

// app.use('/api/items',items)

 app.use('/api/users',users)

 app.use('/api/movies',movies)

app.listen(port,()=>{
    console.log(`server started at ${port}`)
})