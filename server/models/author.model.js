const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true,"Name required"],
        minlength: [3,"Longer"],
    },
    quote:{
        type:String
    }
},{timestamps:true})

const Author = mongoose.model("Author",AuthorSchema);

module.exports = Author;