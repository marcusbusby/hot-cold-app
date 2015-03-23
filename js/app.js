number=random(number 1-100)
guess = prompt(input)

closeness = abs(number=guess)


if(closeness <= 5) {
	print(almost got it!)
}
else if(closeness <= 10) {
	print(this is really close)
}
else if(closeness <= 20) {
	print(relatively close)
}
else {
	print(not really close)
}

function showresult(text) {
	
}