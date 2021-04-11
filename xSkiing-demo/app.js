
const score = document.createElement('h2');

let totalScore = 0;
score.innerHTML = `<code>score: ${totalScore}</code>`;
document.body.prepend(score);
const btn = document.createElement('button');
btn.innerHTML = '<code>restartGame</code>';


const foot = document.createElement('p');
foot.id = 'footer';
foot.innerHTML = "<code>this game is just simple DEMO . i take no credit for animation and image ...</code>";

document.body.append(foot)

btn.style.fontSize = '14px'
document.body.append(btn)
btn.addEventListener('click', function(e) {
	console.log(e);
	avatar.style.top = '100px';
	avatar.style.left = '100px';
	map.style.top = '100px';
	map.style.left = '10px';
	totalScore = 0;
	score.innerHTML = `<code>score: ${totalScore}</code>`;
})

function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();
	
	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width 
		
		);		
}

const avatar = document.querySelector('#player');
const map = document.querySelector('#map');

window.addEventListener('keyup', function(event) {
	if (event.key === 'ArrowDown' || event.key === 'Down') {
		moveVertical(avatar, 50)

	} else if (event.key === 'ArrowUp' || event.key === 'Up'){
		moveVertical(avatar, - 50)
			
	} else if (event.key === 'ArrowRight' || event.key === 'Right'){
		avatar.style.transform = 'scale(1,1)' 
		moveHorizontal(avatar, 50)
		
	} else if (event.key === 'ArrowLeft' || event.key === 'Left'){
		avatar.style.transform = 'scale(-1,1)' // flips horizontal
		moveHorizontal(avatar, - 50)
	}

	

	if (isTouching(avatar, map, totalScore)) {
		moveMap();
		addPoint();
		score.innerHTML = `<code>score: ${totalScore}</code>`;
		
	}	
});
const addPoint = () => {
	totalScore += 1
	return totalScore;
}

const moveVertical = (element, amount) => {
	const currTop = extractPosition(element.style.top)
	element.style.top = `${currTop + amount}px`
}
const moveHorizontal = (element, amount) => {
	const currLeft = extractPosition(element.style.left)
	element.style.left = `${currLeft + amount}px`
}

// "200px".slice(0, -2) gonna return string number without px 
// parseInt("200px".slice(0, -2)) gonna give us number from string
const extractPosition = (pos) => {
	if (!pos) return 100;
	return parseInt(pos.slice(0, -2));	
}

const moveMap = () => {	
	const x = Math.floor(Math.random() * window.innerWidth)
	const y = Math.floor(Math.random() * window.innerHeight)
	map.style.top = `${y}px`
	map.style.left = `${x}px`
}

moveMap();