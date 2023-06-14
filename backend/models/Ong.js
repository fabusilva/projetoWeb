const mongoose = require('mongoose');
const {Schema} = mongoose;

const ongSchema = new Schema({
    name:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
    },
    description:{
        type: String,
    },
    cnpj:{
        type: String,
        require: true,
    },
    address:{
        type: String,
    },
    image:{
        type: String,
    },
    password:{
        type: String,
        require: true,
    },
    causas:[{

        type:Schema.Types.ObjectId,
        ref:'Causa'
    }]
},
{timestamps: true}
);
const Ong = mongoose.model("Ong",ongSchema);
module.exports = {
    Ong,
    ongSchema,
};