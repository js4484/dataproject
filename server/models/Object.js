const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ObjectSchema = new Schema({
  objectID: {
    type: Number,
    required: true
  },
  isHighlight: {
    type: Boolean,
    required: true
  },
  accessionYear: {
    type: Number,
    required: true
  },
  primaryImage: {
    type: String,
    required: false
  },
  primaryImageSmall: {
    type: String,
    required: false
  },
  additionalImages: {
    type: Array,
    required: false
  },
  department: {
    type: String,
    required: false
  },
  objectName: {
    type: String,
    required: false
  },
  title: {
    type: String,
    required: false
  },
  artistDisplayName: {
    type: String,
    required: false
  },
  medium: {
    type: String,
    required: false
  },
  artistNationality: {
    type: String,
    required: false
  },
  objectBeginDate: {
    type: Number,
    required: false
  },
  objectEndDate: {
    type: Number,
    required: false
  },
  
});



module.exports = mongoose.model("objects", ObjectSchema);