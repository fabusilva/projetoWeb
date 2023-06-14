const mongoose = require('mongoose');

const {Schema} = mongoose;

const causaSchema = new Schema({
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
        ref:'Ong',
    },
    people: [{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],

},{timestamps: true}
);
const Causa = mongoose.model("Causa",causaSchema);
module.exports = {
    Causa,
    causaSchema,
};