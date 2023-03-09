const mongoose = require("mongoose");
const {Schema}= mongoose;

const lineSchema = new Schema({
   
    lines: {
        type: String,
        require: true
    }
});

module.exports=mongoose.model("lines",lineSchema);