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
  }
function west() {
    x = x -1;
    xPrint.innerHTML = 'X: ' + x;
    yPrint.innerHTML = 'Y: ' + y;
    moveSprite();
  }
function north() {
    y = y + 1;
    xPrint.innerHTML = 'X: ' + x;
    yPrint.innerHTML = 'Y: ' + y;
    moveSprite();
  }
function south() {
    y = y - 1;
    xPrint.innerHTML = 'X: ' + x;
    yPrint.innerHTML = 'Y: ' + y;
    moveSprite();
  }


var prizeCell = document.getElementById('Y7X4');
var prizeImg = document.createElement('img');
prizeImg.setAttribute('src', 'http://www.freepngimg.com/download/award/27300-5-award-free-download.png');
prizeImg.setAttribute('width', '40px');
prizeImg.setAttribute('height', '40px');
