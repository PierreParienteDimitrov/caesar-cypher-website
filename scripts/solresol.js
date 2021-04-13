const dictionnary = require('./solresolDictionnary.json');

// const userInput = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];

const SolCypher = (userInput, currentIndex) => {
	const translationArr = [];

	const spliceIndex = currentIndex;

	console.log(spliceIndex);

	// Translate user input for dictionnary formatting
	const encodeInput = (userInput) => {
		const originalArr = userInput;
		// console.log(originalArr);

		let duplicateArr = [...originalArr];
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
		// console.log('------');
		// console.log(newArr);
		parseInput(newArr);
	};

	// create arrays of one to four letters
	const parseInput = (newArr) => {
		// console.log('------');
		// console.log(spliceIndex);

		const originalArr = newArr;

		// console.log('------');
		// console.log(originalArr);

		let duplicateArr = [...originalArr];
		// console.log(duplicateArr);

		let words = [];
		for (let i = 1; i < 6; i++) {
			const word = duplicateArr.splice(spliceIndex, i);
			words.push(word);
			// console.log(word);
			duplicateArr = [...originalArr];
		}

		// console.log('------------------');
		// console.log(words);

		translate(words);
	};

	// translate each string
	const translate = (words) => {
		const originalArr = words;

		let duplicateArr = [...originalArr];
		// console.log('------------------');
		// console.log(duplicateArr)

		let dictionnaryArr = [...dictionnary];

		duplicateArr.map((arr) => {
			const word = arr.toString('').split(',').join('');
			console.log(word);
			dictionnaryArr.filter((el) => {
				const { key, value } = el;
				// console.log(el);

				if (key === word) {
					const translation = { key: key, value: value };
					// console.log(translation);

					translationArr.push(translation);
				} else {
					return;
				}
			});
		});

		console.log(translationArr);
		return translationArr;
	};

	encodeInput(userInput);
	return translationArr;
};

// SolCypher(userInput);

export default SolCypher;
