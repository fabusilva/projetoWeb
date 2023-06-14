const mongoose = require('mongoose');
const {Schema} = mongoose;

const trabalhoSchema = new Schema({
    title:{
        type: String,
        require: true,
    },
    date:{
        type: Date,
    },
    description:{
        type: String,
    },
    address:{
        type: String,
    },
    image:{
        type: String,
    },
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    people: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],

},{timestamps:true}
);
const Trabalho = mongoose.model("Trabalho",trabalhoSchema);
module.exports = {
    Trabalho,
    trabalhoSchema,
};