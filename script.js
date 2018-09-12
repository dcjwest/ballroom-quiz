
/* Get page elements */
var currentQuestion = document.getElementById('currentQ');
var questionNum = document.getElementById('questionNum');
var btnArr = document.getElementsByClassName('btn-item');
var quizScreen = document.getElementById('quiz');
var resultScreen = document.getElementById('result');
var danceResult = document.getElementById('danceResult');
var replayBtn = document.getElementById('replayBtn');
var vidArray = document.getElementsByClassName('vid-clip');
var danceProfile = document.getElementById('profile');

for (var v = 0; v < vidArray.length; v++){
	vidArray[v].classList.add('hide');
}
/* Initialise buttons */
for (var i = 0; i < btnArr.length; i++){
	if (i === 0){
		btnArr[i].innerHTML = 'Start';
	}
	else {
		btnArr[i].className += ' hide';
	}
}
var userAnswer = '';
/* Initialise dance scoreboard object */
var danceCount = {
	w: 0,
	t: 0,
	v: 0,
	f: 0,
	q: 0
};
/* Associative array to hold dance names and link to the scoreboard(object) */
var danceArr = [];
danceArr['w'] = 'Waltz';
danceArr['t'] = 'Tango';
danceArr['v'] = 'Vienesse Waltz';
danceArr['f'] = 'Slow Foxtrot';
danceArr['q'] = 'Quickstep';
var myDance = '';

/* Dance characteristics array */
var danceChars = new Array('You carry yourself with elegance and grace. Your gentle nature is perfectly matched with your belief in love and steadfast resolve in trying times.',
							'You have a dramatic flair and you\'re quite vivacious. \"Intensity\" is your middle-name and you strongly go after what you want.',
							'You are grounded in traditional values and are blessed with child-like joy. You typically view your life as a fairytale, believing in true love and the goodness of people.',
							'You have a smooth, easy-going nature which attracts those around you. Your timeless spirit makes you appreciate old-school things more than others.',
							'Your friendly and energetic presence makes you especially likeable. You are strongly motivated and keep moving forward no matter what');

/* Counter and list of quiz questions array */
var questionCount = 0;
var questionArr = new Array('Are you ready?',
							'What is your attitude towards shoes?',
							'Favourite type of weather?',
							'Would you say that you are graceful?',
							'Do you get mad easily?',
							'Pick a pet underwater creature:',
							'Have you got great balance?',
							'Favourite holiday?',
							'Pick a drink:',
							'Does flirting come easily to you?',
							'Why did your last relationship end?',
							'Your best friend would describe you as:',
							'Which animal would you be?',
							'What is your reaction to confrontation?',
							'What do you want to be when you grow up?',
							'What type of music plays while you drive?');

/* Add event triggers for user input buttons */
for (var i = 0; i < btnArr.length; i++){
	btnArr[i].addEventListener('click', danceQuiz);
}

function hideButtons(numOfBtns){
	var btnHideStart = btnArr.length - numOfBtns;

	for (var i = btnHideStart; i < btnArr.length; i++){
		btnArr[i].classList.add('hide');
	}
}
function showAllButtons(){
	for (var i = 0; i < btnArr.length; i++){
		btnArr[i].classList.remove('hide');
	}
}

/* Scoreboard analyser: handles each question via a switch statement*/
function danceQuiz(){
	if (questionCount > 1){
		userAnswer = this.id;
	}
	nextQuestion();
	switch (questionCount){
		case 0:/* Are you ready? */
			hideButtons(4);
			btnArr[0].innerHTML = 'Come on - Let\'s GO!';
			break;
		/* =========================================== */
		case 1:/* What is your attitude towards shoes? */
			btnArr[0].innerHTML = 'Durability';
			btnArr[1].innerHTML = 'Fashionable yet comfortable';
			btnArr[2].innerHTML = 'Expensive... Ka-ching!';
			btnArr[3].innerHTML = 'The flashier the better!';
			btnArr[4].innerHTML = 'I have a gazillion pairs and I\'m shopping for more right now';
			showAllButtons();
			break;
		/* =========================================== */
		case 2:/* Favourite type of weather? */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.t++;
				break;
				case 'btn2': danceCount.f++;
				break;
				case 'btn3': danceCount.w++;
				break;
				case 'btn4': danceCount.q++;
				break;
				case 'btn5': danceCount.v++;
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'Hot and sunny';
			btnArr[1].innerHTML = 'Cold and rainy';
			btnArr[2].innerHTML = 'Snow and icy';
			btnArr[3].innerHTML = 'Mild and windy';
			hideButtons(1);
			break;
		/* =========================================== */
		case 3:/* Would you say that you are graceful? */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.q++;
				break;
				case 'btn2': danceCount.t++;
				break;
				case 'btn3': danceCount.w++; danceCount.v++;
				break;
				case 'btn4': danceCount.f++;
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'Yes';
			btnArr[1].innerHTML = 'No';
			btnArr[2].innerHTML = 'Maybe';
			btnArr[3].innerHTML = 'What\'s that?';
			break;
		/* =========================================== */
		case 4:/* Do you get mad easily? */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.w++;
				break;
				case 'btn2': danceCount.t++;
				break;
				case 'btn3': danceCount.f++; danceCount.v++;
				break;
				case 'btn4': danceCount.q++;
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'Nah, bruh; mellow like a bowl of Jello';
			btnArr[1].innerHTML = 'Yes';
			btnArr[2].innerHTML = 'Absolutely not';
			btnArr[3].innerHTML = 'Depends...';
			break;
		/* =========================================== */
		case 5:/* Pick a pet underwater creature: */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.v++ ; 
				break;
				case 'btn2': danceCount.t++;
				break;
				case 'btn3': danceCount.q++;; 
				break;
				case 'btn4': danceCount.w++; danceCount.f++; 
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'Goldfish';
			btnArr[1].innerHTML = 'Pufferfish';
			btnArr[2].innerHTML = 'Shark';
			btnArr[3].innerHTML = 'Octopus';
			btnArr[4].innerHTML = 'SpongeBob';
			showAllButtons();
			break;
		/* =========================================== */
		case 6:/* Have you got great balance? */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.w++;
				break;
				case 'btn2': danceCount.v++;
				break;
				case 'btn3': danceCount.t++;
				break;
				case 'btn4': danceCount.q++;
				break;
				case 'btn5': danceCount.f++;
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'Yes, I think so';
			btnArr[1].innerHTML = 'I\'m like a Yoga Ninja!';
			btnArr[2].innerHTML = 'Haha...no';
			hideButtons(2);
			break;
		/* =========================================== */
		case 7:/* Favourite holiday? */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.w++; danceCount.t++
				break;
				case 'btn2': danceCount.f++;
				break;
				case 'btn3': danceCount.q++; danceCount.v++
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'New Year\'s Eve';
			btnArr[1].innerHTML = 'Valentine\'s Day';
			btnArr[2].innerHTML = 'Halloween';
			btnArr[3].innerHTML = 'Thanksgiving';
			btnArr[4].innerHTML = 'Christmas';
			showAllButtons();
			break;
		/* =========================================== */
		case 8:/* Pick a drink: */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.q++;
				break;
				case 'btn2': danceCount.w++;
				break;
				case 'btn3': danceCount.t++;
				break;
				case 'btn4': danceCount.f++;
				break;
				case 'btn5': danceCount.v++;
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'Beer and shots and...keep\'em comin\'!';
			btnArr[1].innerHTML = 'Wine please';
			btnArr[2].innerHTML = 'Hot pink flirtini with little umbrella';
			btnArr[3].innerHTML = 'Sparkling champagne';
			btnArr[4].innerHTML = 'Just water is fine, thanks';
			break;
		/* =========================================== */
		case 9:/* Does flirting come easily to you? */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.q++;
				break;
				case 'btn2': danceCount.w++;
				break;
				case 'btn3': danceCount.f++;
				break;
				case 'btn4': danceCount.v++;
				break;
				case 'btn5': danceCount.t++;
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'Gosh, no!';
			btnArr[1].innerHTML = 'Sometimes';
			btnArr[2].innerHTML = 'Yeah, I\'d like to think so';
			btnArr[3].innerHTML = '\"You\'re so beautiful, you made me forget my pickup line\"';
			hideButtons(1);
			break;
		/* =========================================== */
		case 10:/* Why did your last relationship end? */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.w++;
				break;
				case 'btn2': danceCount.v++;
				break;
				case 'btn3': danceCount.t++; danceCount.q++;
				break;
				case 'btn4': danceCount.f++;
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'I don\'t know';
			btnArr[1].innerHTML = 'It got boring!';
			btnArr[2].innerHTML = 'Love and romance was gone';
			btnArr[3].innerHTML = 'The fighting got too intense';
			btnArr[4].innerHTML = 'The it ended the morning after...';
			showAllButtons();
			break;
		/* =========================================== */
		case 11:/* Your best friend would describe you as: */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.w++;
				break;
				case 'btn2': danceCount.t++;
				break;
				case 'btn3': danceCount.v++;
				break;
				case 'btn4': danceCount.f++;
				break;
				case 'btn5': danceCount.q++;
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'The Life of The Party';
			btnArr[1].innerHTML = 'The Flirt';
			btnArr[2].innerHTML = 'The Trend-setter';
			btnArr[3].innerHTML = 'The Heartbreaker';
			btnArr[4].innerHTML = 'The Dreamer';
			break;
		/* =========================================== */
		case 12:/* Which animal would you be? */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.w++;
				break;
				case 'btn2': danceCount.f++;
				break;
				case 'btn3': danceCount.q++;
				break;
				case 'btn4': danceCount.t++;
				break;
				case 'btn5': danceCount.v++;
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'Dolphin';
			btnArr[1].innerHTML = 'Lion';
			btnArr[2].innerHTML = 'Swan';
			btnArr[3].innerHTML = 'Panda';
			btnArr[4].innerHTML = 'Monkey';
			break;
		/* =========================================== */
		case 13:/* What is your reaction to confrontation? */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.f++;
				break;
				case 'btn2': danceCount.t++;
				break;
				case 'btn3': danceCount.v++;
				break;
				case 'btn4': danceCount.w++;
				break;
				case 'btn5': danceCount.q++;
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'Kill first, ask questions later';
			btnArr[1].innerHTML = 'Laughter - the best distraction';
			btnArr[2].innerHTML = 'Silent treatment';
			btnArr[3].innerHTML = 'Ruuuuuunnnnnnn!!!';
			btnArr[4].innerHTML = 'Nothing. Your friends have already taken care of it';
			break;
		/* =========================================== */
		case 14:/* What do you want to be when you grow up? */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.t++;
				break;
				case 'btn2': danceCount.v++;
				break;
				case 'btn3': danceCount.w++;
				break;
				case 'btn4': danceCount.q++;
				break;
				case 'btn5': danceCount.f++;
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'Actor/Actress';
			btnArr[1].innerHTML = 'Athlete';
			btnArr[2].innerHTML = 'Engineer';
			btnArr[3].innerHTML = 'Model';
			btnArr[4].innerHTML = 'Teacher';
			break;
		/* =========================================== */
		case 15:/* What type of music plays while you drive? */
			/* First analyse answers from previous question */
			switch (userAnswer){
				case 'btn1': danceCount.f++;
				break;
				case 'btn2': danceCount.q++;
				break;
				case 'btn3': danceCount.t++;
				break;
				case 'btn4': danceCount.v++;
				break;
				case 'btn5': danceCount.w++;
				break;
				default: console.log('Something went wrong...');
				break;
			}
			btnArr[0].innerHTML = 'Jazz';
			btnArr[1].innerHTML = 'Rap';
			btnArr[2].innerHTML = 'Love songs';
			btnArr[3].innerHTML = 'Classical';
			btnArr[4].innerHTML = 'Country';
			break;
		/* =========================================== */
		case 16:
			/* Analyse answers from last question */
			switch (userAnswer){
				case 'btn1': danceCount.f++;
				break;
				case 'btn2': danceCount.t++;
				break;
				case 'btn3': danceCount.w++;
				break;
				case 'btn4': danceCount.v++;
				break;
				case 'btn5': danceCount.q++;
				break;
				default: console.log('Something went wrong...');
				break;
			}
			console.log(danceCount);
			break;
	}
	questionCount++;
}


/* Question quizzer: Iterates through each question and receives highest scoring dance (as a key for dance object/array) */
function nextQuestion(){
	var numOfQuestions = questionArr.length-1;

	if(questionCount < questionArr.length){
		currentQuestion.innerHTML = questionArr[questionCount];
		if(questionCount == 0){questionNum.innerHTML = '...';}
		else {
			questionNum.innerHTML = 'Question '+questionCount+' of '+numOfQuestions;
		}
		// console.log('Current question: '+questionCount);
	}
	else{
		hideButtons(5);
		quizScreen.classList.add('hide');
		myDance = calculateScore();
		danceResult.innerHTML = 'You are the '+danceArr[myDance]+ '!';
		autoPlayVids();
		switch(myDance){
			case 'w': vidArray[0].classList.remove('hide'); vidArray[0].play(); danceProfile.innerHTML = danceChars[0];
			break;
			case 't': vidArray[1].classList.remove('hide'); vidArray[1].play(); danceProfile.innerHTML = danceChars[1];
			break;
			case 'v': vidArray[2].classList.remove('hide'); vidArray[2].play(); danceProfile.innerHTML = danceChars[2];
			break;
			case 'f': vidArray[3].classList.remove('hide'); vidArray[3].play(); danceProfile.innerHTML = danceChars[3];
			break;
			case 'q': vidArray[4].classList.remove('hide'); vidArray[4].play(); danceProfile.innerHTML = danceChars[4];
			break;
			default:
				vidArray[0].innerHTML = 'An error occurred: the video cannot be played.';
				vidArray[0].classList.remove('hide');
			break;
		}
		resultScreen.classList.remove('hide');
		replayBtn.addEventListener('click', function(){document.location.reload();});
	}
}

/* Score calculator: breaks danceCount object into a 'key array' and loops through it to determine the key with the highest value */
function calculateScore(){
	var maxscore = 0;
	var keys = Object.keys(danceCount),
		len = keys.length,
		j = 0,
		prop,
		value
		bestDance = '';

	while(j < len){
		prop = keys[j];
		value = danceCount[prop];
		if (value >= maxscore){
			maxscore = value;
			bestDance = prop;
		}
		j++;
	}
	// console.log(bestDance);
	return bestDance;
}

function autoPlayVids(){
	for (var v = 0; v < vidArray.length; v++){
	vidArray[v].setAttribute('autoplay', 'autoplay');
	}
}
replayBtn.addEventListener('click', function(){
	document.location.reload();
	//Force scroll position to top of page after refresh
	// window.onbeforeunload = function(){
	// 	window.scrollTo(0, 0);
	// }
});