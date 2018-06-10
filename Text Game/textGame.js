//the starting position of x an y
var x = 0;
var y = 5;
const start = document.getElementById('Y5X1');

//get id value ie yx
function getyx(y, x) {
	var yx = 'Y' + y + 'X' + x ;
	return yx;
}

//selects cell using the getyx function value
function getPosition() {
  let position = document.getElementById(getyx(y,x));
	return position;
}

//append img to position
function moveSprite() {
	const position = getPosition();
	position.appendChild(spriteImg);
}

//print position to screen
var xPrint = document.getElementById('xPrint');
var yPrint = document.getElementById('yPrint');

//createSprite and styling
var spriteImg = document.createElement('img');
spriteImg.setAttribute('src', 'http://pixelartmaker.com/art/2ce07bdb4cd8e74.png');
spriteImg.setAttribute('width', '50px');
spriteImg.setAttribute('height', '50px');
start.appendChild(spriteImg);

//arrow key controls
function getKeyAndMove(e){
	var key_code=e.which||e.keyCode;
		switch(key_code){
			case 37: //left arrow key
				west();
				break;
			case 38: //Up arrow key
				north();
				break;
			case 39: //right arrow key
				east();
				break;
			case 40: //down arrow key
				south();
				break;
		}
}

// On screen Button Controls
function east() {
    x = x +1;
    xPrint.innerHTML = 'X: ' + x;
    yPrint.innerHTML = 'Y: ' + y;
    moveSprite();
		prizeCheck();
		bombCheck();
		scoreCheck();
		 intro();
		 riddle();
		 riddleTwo();
		 randomNumber();
  }
function west() {
    x = x -1;
    xPrint.innerHTML = 'X: ' + x;
    yPrint.innerHTML = 'Y: ' + y;
    moveSprite();
		prizeCheck();
		bombCheck();
		scoreCheck();
		 intro();
		 riddle();
		 riddleTwo();
		 randomNumber();
  }
function north() {
    y = y + 1;
    xPrint.innerHTML = 'X: ' + x;
    yPrint.innerHTML = 'Y: ' + y;
    moveSprite();
		prizeCheck();
		bombCheck();
		scoreCheck();
		 intro();
		 riddle();
		 riddleTwo();
		 randomNumber();
  }
function south() {
    y = y - 1;
    xPrint.innerHTML = 'X: ' + x;
    yPrint.innerHTML = 'Y: ' + y;
    moveSprite();
		prizeCheck();
		bombCheck();
		scoreCheck();
		 intro();
		 riddle();
		 riddleTwo();
  }

/************* Scored and Health Meters & Check for items ie hitting bombs or
getting prizes & reload page on win/lose **********************************/
var score = 0;
var health = 100;

//html Meter
const scoreHTML = document.getElementById('scoreHTML');
const healthHTML = document.getElementById('healthHTML');



var trophyImg = document.createElement('img');
trophyImg.setAttribute('src', 'https://png.pngtree.com/element_origin_min_pic/16/08/25/1757beb73c8dec3.jpg');
trophyImg.setAttribute('width', '50px');
trophyImg.setAttribute('height', '50px');


//checks if sprite is on trophy and appends to cell
function prizeCheck() {
	if(x==4 && y ==7 || x==5 && y==9 || x==20 && y==7 || x==15 && y==2 || x==19 && y==5 || x==6 && y==8 || x==16 && y==4) {
		const position = getPosition();
		position.appendChild(trophyImg);
		alert('You found a trophy!');
		score += 10;
	}
}

//creat bomb img
const bombImg = document.createElement('img');
bombImg.setAttribute('src', 'https://cdn.pixabay.com/photo/2016/08/18/04/44/bomb-1602109_960_720.png');
bombImg.setAttribute('width', '50px');
bombImg.setAttribute('height', '50px');

//checks if sprite lands on bomb and appends
function bombCheck() {
	if (x==1 && y==2 || x==18 && y==3 || x==18 && y==9 || x==13 && y==2 || x==3 && y==7 || x==14 && y==6 || x==17 && y==7) {
		const position = getPosition();
		position.append(bombImg);
		alert('You hit the bomb!')
		health -= 10;
	}
}

//checks score and updates html meters
function scoreCheck() {
	scoreHTML.innerHTML = score;
	healthHTML.innerHTML = health;

	if(score >= 100) {
		alert('You Win!!')
		reloadPage();
	}
	else if(health <= 0) {
		alert('You Lose! :( \nPlease Play Again')
		reloadPage();
	}
}

//reload page on win/lose or dont want to play
function reloadPage() {
		window.location.reload(true);
}

var riddeImg = document.createElement('img');
riddeImg.setAttribute('src', 'https://image.freepik.com/free-icon/question-mark_318-52837.jpg');
riddeImg.setAttribute('width', '50px');
riddeImg.setAttribute('height', '50px');


//has riddle been played?
var riddePlayed = false;
//riddle function only plays if riddePlayed == false
function riddle() {
	if(riddePlayed == false) {
		if(x==8 && y ==8) {
			const position = getPosition();
			position.append(riddeImg);
				var answer = prompt('What gets bigger the more you take away from it?');
					if(answer.toUpperCase()=='A HOLE') {
						score += 20;
						scoreCheck();
						alert('You just got 20 extra points!');
					}
					else {
						score -= 10;
						alert('You just lost 10 points!')
						scoreCheck();
					}
				riddePlayed = true;
		}
	}
}

//exact same function but with cell Y4X24
//has riddle been played?
var riddePlayedTwo = false;
//riddle function only plays if riddePlayed == false
function riddleTwo() {
	if(riddePlayedTwo == false) {
		if(x==24 && y ==4) {
			const position = getPosition();
			position.append(riddeImg);
				var answer = prompt('I have hands I can move but I cannot clap, what am I?');
					if(answer.toUpperCase()=='A CLOCK') {
						score += 20;
						scoreCheck();
						alert('You just got 20 extra points!');
					}
					else {
						score -= 10;
						alert('You just lost 10 points!')
						scoreCheck();
					}
				riddePlayedTwo = true;
		}
	}
}


//guess a number against computer you make a bet on if you can get it right

function randomNumber() {
	if (getyx(y,x) =='Y3X23' || getyx(y,x) =='Y3X2') {
		var randomNumber = (Math.floor(Math.random() * 5) + 1);
		var bet = prompt('Please make a wager');
		var guess = prompt('Please pick a number from 1 to 5');
			if(parseInt(guess) == randomNumber) {
			alert('You just increased your score by ' + bet + ' !')
			score += parseInt(bet);
			scoreCheck();
		}
		else {
			alert('Sorry you just lost ' + bet + ' health points :(');
			health -= parseInt(bet);
			scoreCheck();
		}
	}
}

//create wizard img to intro
var beginWizard = document.getElementsByClassName('beginWizard')[0];
var beginWizardImg = document.createElement('img');
beginWizardImg.setAttribute('src', 'https://img.clipartxtras.com/ddb97e9e3e892dd9ee3337630f8dd825_download-wizard-free-png-photo-images-and-clipart-freepngimg-wizard-clipart-png_392-408.png');
beginWizardImg.setAttribute('width', '70px');
beginWizardImg.setAttribute('height', '70px');


/*** Formula to get position if getyx(y,x) =='Y5X4'***/

//Intro function Wizard asks question 'Play?'
function intro() {
		if (getyx(y,x) =='Y5X2') {
		alert('Greetings, I am the all powerfull Elodin, son of Steve \nI am here to guide you on a quest!\nAre You ready to play?');
		var answer = prompt();
			if(answer.toUpperCase() == 'YES'){
				beginWizard.appendChild(beginWizardImg);
				alert('Fantastic! \nGet a score of 100 to win the game \nDont Let your health get to zero or you will die\nGood Luck and godspeed');

			}
			else {
				alert('Alright your loss, get out of here');
				reloadPage();
			}
		}
}
