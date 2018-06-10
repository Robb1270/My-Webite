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
spriteImg.setAttribute('width', '40px');
spriteImg.setAttribute('height', '40px');
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
		bombCheck()
		scoreCheck()
  }
function west() {
    x = x -1;
    xPrint.innerHTML = 'X: ' + x;
    yPrint.innerHTML = 'Y: ' + y;
    moveSprite();
		prizeCheck();
		bombCheck()
		scoreCheck()
  }
function north() {
    y = y + 1;
    xPrint.innerHTML = 'X: ' + x;
    yPrint.innerHTML = 'Y: ' + y;
    moveSprite();
		prizeCheck();
		bombCheck()
		scoreCheck()
  }
function south() {
    y = y - 1;
    xPrint.innerHTML = 'X: ' + x;
    yPrint.innerHTML = 'Y: ' + y;
    moveSprite();
		prizeCheck();
		bombCheck()
		scoreCheck()
  }


/************* Scored and Health Meters & Check for items ie hitting bombs or
getting prizes & reload page on win/lose **********************************/
var score = 0;
var health = 100;

const scoreHTML = document.getElementById('scoreHTML');
const healthHTML = document.getElementById('healthHTML');

function prizeCheck() {
	if(x==4 && y ==7 || x==5 && y==9 || x==20 && y==7 || x==15 && y==2 || x==19 && y==5 || x==6 && y==8 || x==16 && y==4) {
		alert('You found a trophy!');
		score += 10;
	}
}

function bombCheck() {
	if (x==1 && y==2 || x==18 && y==3 || x==18 && y==9 || x==13 && y==2 || x==3 && y==7 || x==14 && y==6 || x==17 && y==7) {
		alert('You hit the bomb!')
		health -= 10;
	}
}

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

function reloadPage() {
		window.location.reload(true);
}
