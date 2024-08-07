const mongoose=require('mongoose');
const { boolean } = require('zod');

mongoose.connect('mongodb+srv://Hiccup:Puneet%40123@lerningmongodb.smlud5k.mongodb.net/todos')
const todoSchema=mongoose.Schema({
    title: String,
    description:String,
    completed:Boolean

})

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}

