const express = require('express')
const router = express.Router()

//User Model
const User = require('../../models/userModel')
const Movie = require('../../models/movie')

//@route GET api/users
//@desc Get All users
//@access public

router.get('/',(req,res)=>{
    //User.find()
    Movie.find()
    .then(items => res.json(items))
})

//@route POST api/items
//@desc Create a Item
//@access public

router.post('/',(req,res)=>{
    const newItem = new User({
        name: req.body.name,
        age: req.body.age,
        address: req.body.address,
        phone: req.body.phone,
    })

    newItem.save().then(item => res.json(item))
})

//@route DELETE api/items
//@desc Delete a Item
//@access public

router.delete('/:id',(req,res)=>{
    User.findById(req.params.id)
    .then(item => item.remove().then(()=>res.json({success: true})))
    .catch(err => res.status(404).json({success: false}))
})

module.exports = router