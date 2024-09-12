const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    stockSymbol: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    tags: [String],
    createdAt: { type: Date, default: Date.now },
    likesCount: { type: Number, default: 0 },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Post", postSchema);
