const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
  },
  phone: {
    type: String,
    minlength: 5,
  },
  street: {
    type: String,
    required: true,
    minLenght: 5,
  },
  city: {
    type: String,
    required: true,
    minlength: 5,
  },
  friendOf: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
  },
  ],
});

module.exports = mongoose.model('Person', schema);
