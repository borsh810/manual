const box = document.querySelector('.box'),
		btn = document.querySelector('button')

// const width = box.clientWidth;
// const heigth = box.clientHeight;
// const width = box.offsetWidth;
// const heigth = box.offsetHeight;
const width = box.scrollWidth;
const heigth = box.scrollHeight;

console.log(width, heigth);

btn.addEventListener('click', () => {
	// box.style.heigth = box.scrollHeight + 'px';
	console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box);

console.log(style.display);

console.log(document.documentElement.scrollTop);