const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://bvscode:UcCVeibkvU9BfC3m@cluster0.6kgf73z.mongodb.net/bvstodonotes?retryWrites=true&w=majority';


const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connect to Mongo Successfully");
    })
}

module.exports = connectToMongo;