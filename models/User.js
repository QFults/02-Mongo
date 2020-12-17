const { model, Schema } = require('mongoose')

const User = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  items: [{
    type: Schema.Types.ObjectId,
    ref: 'Item'
  }]
}, { timestamps: true })

module.exports = model('User', User)
