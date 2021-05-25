const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const objectId=Schema.objectId;




const Score_Schema = new Schema({
		username:{

    type: String
        },
		score: {

        type:Number},

        date: 
        {
            type: Date,
             default: Date.now
            },
		country:{

        type:String
        }
    });
    
const score_Model=mongoose.model('score_Model',Score_Schema);

module.exports=score_Model;