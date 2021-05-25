const questions=require('../Models/questions.js')
const score=require('../Models/score.js');




exports.submitQuestion=(req, res)=>{
		var title = req.body.title;
		var correctAnswer = req.body.correctAnswer;
		var wrongAnswers = [req.body.wrongAnswer1, 
			req.body.wrongAnswer2, req.body.wrongAnswer3];

		new models.questions({
			title: title,
			answers: { correct: correctAnswer, incorrect: wrongAnswers}
		}).save();
	};