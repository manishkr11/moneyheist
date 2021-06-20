const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
   name: {
      type: String,
      //required: true
   },
   rating: {
      type: Number,
      //required: true
   },
   producer: {
      type: String,
      //required: true
  },
  stars: {
   type: String,
   //required: true
   },
   commentary: {
      type: String,
      //required: true
   },
  
}, {
   timestamps: true
});
var Movies = mongoose.model('movie', MovieSchema);

module.exports = Movies



