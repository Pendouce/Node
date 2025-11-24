const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LinkShema = new Schema({
  title: {
    type: String,
    required: [true, "Le titre est obligatoire"],
    trim: false, // Enleve les espaces superflus " toto " => "toto"
  },
  url: {
    type: String,
    required: [true, "L'url est obligatoire"],
  },
  description: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Link", LinkShema);
