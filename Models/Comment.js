const mongoose = require("mongoose");
const Shema = mongoose.Schema;

const CommentShema = new Shema({
  text: {
    type: String,
    required: [true, "Le text du commentaire est obligatoire"],
  },
  link: {
    type: Shema.Types.ObjectId, //Stock l'id d'un objet Link
    ref: "Link", // Fait reference au model 'Link'
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Comment", CommentShema);
