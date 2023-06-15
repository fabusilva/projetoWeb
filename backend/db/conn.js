const mongoose = require("mongoose");

async function main(){
    try {

        mongoose.set("strictQuery",true);
        //fals
        //MNJiW6IWLjweK206
        await mongoose.connect('mongodb+srv://fals:MNJiW6IWLjweK206@cluster0.tqr9pz7.mongodb.net/?retryWrites=true&w=majority');
        console.log("conectado ao mongodb");
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}

module.exports = main;