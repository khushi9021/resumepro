const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema(

    {
        title: {
            type: String,
            required: true
        }
    }
);
const skill= mongoose.model("skills", schema);
module.exports = skill;