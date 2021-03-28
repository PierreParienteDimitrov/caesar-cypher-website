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

		wordArr.map((wordEl, index) => {
			alphabetArray.map((alphEl, alphaIndex) => {
				if (wordEl === alphEl) {
					if (wordEl !== 'z') {
						allArrays.map((el, index) => {
							// console.log(el.key);
							const newArr = el.key.push(alphabetArray[alphaIndex + index]);
							// console.log(newArr);
						});
					} else if (wordEl === 'z') {
						cesarWordArr.push(alphabetArray[0]);
					}

					console.log(allArrays);
				}
			});
		});
	};

	transform();

	return allArrays;
};
