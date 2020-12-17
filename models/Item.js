const { model, Schema } = require('mongoose')

const Item = new Schema({
  text: {
    type: String,
    required: true
  },
  isDone: {
    type: Boolean,
    required: true
  }
}, { timestamps: true })

module.exports = model('Item', Item)
