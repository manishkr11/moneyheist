const graphql = require('graphql')
const _ = require('lodash')
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInputObjectType
} = graphql

const User = require('../models/userModel')

const AddressType =  new GraphQLInputObjectType(({
    name:'Address',
    fields: () => ({
        city: {type:GraphQLString},
        pin:{type:GraphQLString},
        landmark:{type:GraphQLString}
    })
}))

const UserType =  new GraphQLObjectType(({
    name:'User',
    fields: () => ({
        id: {type:GraphQLID},
        name:{type:GraphQLString},
        age:{type:GraphQLString},
        address:{
            type:AddressType
        }
    })
}))

const RootQuery = new GraphQLObjectType(({
    name:'RootQueryType',
    fields:{
        users:{
            type:GraphQLList(UserType),
            resolve (parent, args, context, info) {
                    return User.find()
                        .then (user => {
                            return user
                        })
                        .catch (err => {
                            console.error(err)
                        })} 
        },

        user:{
            type:UserType,
            args:{id:{type:GraphQLString}},
            resolve (parent, args, context, info) {
                    return User.findOne({ _id: args.id })
                        .then (user => {
                            return user
                        })
                        .catch (err => {
                            console.error(err)
                        })
                    } 
        },
    }
}))

const UserTypeAbc = new GraphQLInputObjectType({
    name: 'CreateUserInput',
    description: 'Input payload for creating user',
    fields: () => ({
      name: {
        type: GraphQLString,
      },
      age: {
        type: GraphQLString,
      },
      address: {
        type: AddressType,
      }
    }),
  });

const mutation = new GraphQLObjectType({
    name:'mutation',
    fields:{
        addUser: {
            type: UserType,
            args: {
                input: {
                    type: UserTypeAbc,
                },
                // name: {type: GraphQLNonNull(GraphQLString)},
                // age: {type: GraphQLString},
                // address: {type: AddressType}
            },
            resolve: function(parent, args) {
                console.log(args)
                const {name, age, address} = args.input;
                const userObj = new User({
                    name,
                    age,
                    address
                })
                return userObj.save()
                .then (result => result)
                .catch (err => {
                    console.error(err)
                })
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query:RootQuery,
    mutation
})