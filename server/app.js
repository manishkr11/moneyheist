const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const { gql } = require('apollo-server-express');
const Movie = require('./models/movie')



const typeDefs = gql `
  input ReviewInput {
      stars: String
      commentary: String
    }
   type Movie {
     id: ID
     name: String
     producer: String
     stars: String
      commentary: String
   }
   
   type Query {
     getMovies: [Movie]
     getMovie(id: ID!): Movie
   }
   type Mutation {
     addMovie(input: ReviewInput): Movie
     updateMovie(name: String!, producer: String!): Movie
     deleteMovie(id: ID!): Movie
   }
 `

const resolvers = {
  Query: {
    getMovies:async (parent, args) => {
      return await Movie.find({});
    },
    getMovie: async (parent, args) => {
      return await Movie.findById(args.id);
    }
  },
  Mutation: {
    addMovie: (parent, args) => {
      console.log('okkkkk',args)
      let movie = new Movie({
        name: args.name,
        producer: args.producer,
        rating: args.rating,
        stars: args.input.stars,
        commentary: args.input.commentary,
      });
      return movie.save();
    },
    updateMovie: (parent, args) => {
      if (!args.id) return;
        return Movie.findOneAndUpdate(
         {
           _id: args.id
         },
         {
           $set: {
             name: args.name,
             producer: args.producer,
             rating: args.rating,
           }
         }, {new: true}, (err, Movie) => {
           if (err) {
             console.log('Something went wrong when updating the movie');
           } else {
           }
         }
      );
    },
    deleteMovie: (parent, args) => {
      Movie.findById(args.id)
     .then(item => item.remove())
    },
  }
}

const db = require('./config/keys').mongoURI

//Connect to Mongo

mongoose.connect(db)
.then(()=> console.log('MongoDB Connnected'))
.catch(err=> console.log(err));

const server = new ApolloServer({
      typeDefs: typeDefs,
      resolvers: resolvers
});
const app = express();
app.use(bodyParser.json());
app.use('*', cors());
server.applyMiddleware({ app });
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`));