export const ceasarCypher = (userInput) => {
	// Initializing word
	const word = userInput.split(' ').join('').toLowerCase();
	// console.log(word);

	// Initializing alphabet arrat
	const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
	// Converting word into an array
	const wordArr = word.split('');

	const cesarWordArr = [];

	const transform = () => {
		wordArr.map((wordEl, index) => {
			alphabetArray.map((alphEl, index) => {
				if (wordEl === alphEl) {
					if (wordEl !== 'z') {
						cesarWordArr.push(alphabetArray[index + 1]);
					} else if (wordEl === 'z') {
						cesarWordArr.push(alphabetArray[0]);
					}

					console.log(cesarWordArr);
				}
			});
		});
	};

	transform();

	return cesarWordArr.join('');
};
