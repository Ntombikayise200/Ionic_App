const mongoose =require('mongoose');
const Schema=mongoose.Schema;



const questionSchema=new Schema({
 title:{
     type :String
 },
 answer:{
   	correct: String,
	incorrect: [String] },
		entered: {type: Date, default: Date.now}
 
})

const question_Model=mongoose.model('question_Model',questionSchema);

module.exports=question_Model;