// Select your div
const waffle = d3.select('.waffle');

// Create an array with numbers 0 - 99
const numbers = d3.range(101);

// For each item in the array, add a div element
// if the number is < 5, color it red, otherwise gray
var waffle1= waffle
	.selectAll('.block')
	.data(numbers)
	.enter()
	.append('div')
	.attr('class', 'block')
	.style('background-color', d => (d < 99 ? 'tomato' : '#FFFAF0'));
	
var waffle2= waffle
	.selectAll('.block')
	.data(numbers)
	.enter()
	.append('div')
	.attr('class', 'block')
	.style('background-color', d => (d < 99 ? 'tomato' : '#FFFAF0'));