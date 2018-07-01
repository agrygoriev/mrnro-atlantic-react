const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const DossierSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  handle: {
    type: String,
    required: true,
    max: 50
  },
  social: {
    facebook: {
      type: String
    },
    youtube: {
      type: String
    },
    twitter: {
      type: String
    },
    insta: {
      type: String
    }
  },
  skills: {
    type: [String]
  },
  role: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Dossier = mongoose.model('dossier', DossierSchema);