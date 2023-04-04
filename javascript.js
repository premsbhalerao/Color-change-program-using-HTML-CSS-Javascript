const button = document.querySelector('button');
const body = document.querySelector('body');
const colors = ['blue','yellow'];

body.style.backgroundColor = "black";
button.addEventListener('click',changeBackground);

function changeBackground(){
	const colorIndex = parseInt(Math.random() * colors.length);
	body.style.backgroundColor =  colors[colorIndex];
}