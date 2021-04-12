const dictionnary = require('./solresolDictionnary.json');

const SolCypher = (userInput) => {
	// console.log(userInput);
	const originalArr = userInput;

	const translationArr = [];

	// const userInput = ['do', 're', 'mi', 'fa', 'sol', 'la', 'si'];

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
		// console.log('parsing');
		const originalArr = newArr;

		// console.log('------');
		// console.log(originalArr);

		let duplicateArr = [...originalArr];
		// console.log(duplicateArr);

		let words = [];
		for (let i = 1; i < 6; i++) {
			const word = duplicateArr.splice(0, i);
			words.push(word);
			// console.log(word);
			duplicateArr = [...originalArr];
		}

		// console.log('------------------');
		// console.log(words);

		translate(words);

		// for (let i = 1; i < 6; i++) {
		// 	const word = duplicateArr.splice(2, i);
		// 	console.log(word.toString().split(',').join(''));
		// 	duplicateArr = [...originalArr];
		// }
	};

	// translate each string
	const translate = (words) => {
		const originalArr = words;

		let duplicateArr = [...originalArr];

		let dictionnaryArr = [...dictionnary];

		// console.log(duplicateArr);

		console.log('------------------');
		console.log(duplicateArr);

		// let newArr = [];

		// duplicateArr.map((el, index) => {
		// 	console.log('------------------');
		// 	console.log(el);
		// 	const note = el.toString('').split(',').join('');
		// 	newArr.push(note);
		// });

		// console.log('------------------');
		// console.log(newArr);

		// console.log(dictionnary);

		duplicateArr.map((arr, index) => {
			const word = arr.toString('').split(',').join('');
			// console.log(word);
			dictionnaryArr.filter((el, index) => {
				const { key, value } = el;
				// console.log(el);

				if (key === word) {
					const translation = { key: key, value: value };
					// console.log(translation);

					translationArr.push(translation);
				} else {
					return;
				}

				// console.log(translationArr);
			});
		});

		// console.log(translationArr);
		return translationArr;
	};

	// parseInput();
	// console.log(encodeInput(userInput));

	encodeInput(userInput);
	return translationArr;
};

export default SolCypher;
