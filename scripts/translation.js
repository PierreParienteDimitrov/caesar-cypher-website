export const translation = (userInput) => {
	const userInputArr = userInput.split(' ');

	// console.log(userInputArr);

	let duplicateArr = [...userInputArr];
	let newArr = [];
	duplicateArr.map((el, index) => {
		if (el === 'sol') {
			newArr.push('so');
		} else {
			const letter = el.toString().split('').splice(0, 1).toString();
			// console.log(letter);
			newArr.push(letter);
		}
	});

	// console.log(newArr);

	return newArr;
};
