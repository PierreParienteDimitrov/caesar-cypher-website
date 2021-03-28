export const ceasarCypher = (userInput) => {
	// Initializing word
	const word = userInput.split(' ').join('').toLowerCase();
	// console.log(word);

	// Initializing alphabet arrat
	const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
	// Converting word into an array
	const wordArr = word.split('');

	// Arr to store 26 keys
	let allArrays = [];

	// Function to create all the keys
	function createKeys() {
		for (let i = 1; i < 27; i++) {
			allArrays[i] = { key: [] };
		}
	}

	// const cesarWordArr = [];

	const transform = () => {
		createKeys();
		// console.log(allArrays);

		wordArr.map((wordEl, wordIndex) => {
			alphabetArray.map((alphEl, alphaIndex) => {
				if (wordEl === alphEl) {
					const newIndex = alphabetArray.indexOf(wordEl) + 1;
					// console.log(newIndex);

					allArrays.map((el, index) => {
						const counter = newIndex + index;
						if (counter < 27) {
							const newArr = el.key.push(alphabetArray[alphaIndex + index]);
						} else if (counter > 26) {
							let calc = counter - 27;
							const newArr = el.key.push(alphabetArray[calc]);
						}
					});

					// allArrays.map((el, index) => {
					// 	// if (alphabetArray.indexOf(wordEl + index) < alphabetArray.length) {
					// 	// 	const newArr = el.key.push(alphabetArray[alphaIndex + index]);
					// 	// } else if (
					// 	// 	alphabetArray.indexOf(wordEl + index) >= alphabetArray.length
					// 	// ) {
					// 	// 	const newArr = el.key.push(alphabetArray[alphaIndex - index]);
					// 	// }
					// });

					// if (alphabetArray.indexOf(wordEl + index) < alphabetArray.length) {
					// 	allArrays.map((el, index) => {
					// 		// console.log(el.key);
					// 		const newArr = el.key.push(alphabetArray[alphaIndex + index]);
					// 		// console.log(newArr);
					// 	});
					// } else if (wordEl === 'z') {
					// 	cesarWordArr.push(alphabetArray[0]);
					// }

					console.log(allArrays);
				}
			});
		});
	};

	transform();

	return allArrays;
};
