const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    GiverId:{
        type: String,
        required: true
    },
    FoodTitle: {
        type: String,
        required: true
    },
    FoodType:{
        type: String,
        required: true
    },
    Quantiy:{
        type: Number,
        required: true
    },
    Units:{
        type: String,
        required: true
    },
    Image:{
        type: String
    },
    cookDate:{
       type: String,
       required: true
    },
    ExpiryDate:{
        type: String,
        required: true
     },
     createdAt: {
        type: Date,
        default: Date.now,
      }
  }
);

module.exports = mongoose.model("Post", PostSchema);