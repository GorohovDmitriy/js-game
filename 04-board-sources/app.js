const board = document.querySelector('#board')
const colors = [
	'#A6F2F2',
	'#DDF181',
	'#FF715B',
	'#9CD9EC',
	'#FF4567',
	'#65CE54',
	'#EDFAE3',
	'#FFF8E3',
	'#FFC01E',
	'#5F45FF',
	'#18A0FB',
	'#C549FF'
]
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () => setColor(square))
	square.addEventListener('mouseleave', () => removeColor(square))

	board.append(square)
}

function setColor(element) {
	const color = getRandomColor()
	element.style.backgroundColor = color
	element.style.boxShadow = `0 0 5px ${color}, 0 0 10px ${color}`
}
function removeColor(element) {
	element.style.backgroundColor = '#1d1d1d'

	element.style.boxShadow = '0 0 5px #000'
}
function getRandomColor() {
	const index = Math.floor(Math.random() * colors.length)
	return colors[index]
}
