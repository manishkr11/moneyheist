const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AddressSchema = new Schema({
    city: {
        type: String
    },
    pin: {
        type: String
    },
    landmark: {
        type: String
    }
})


// Create User Schema

const UserSchema = new Schema({
    name: {
        type: String,
        //required: true
    },
    age: {
        type: String
    },
    address: {
        type: AddressSchema
    }
})

const User = mongoose.model('user', UserSchema)

module.exports = User
//



