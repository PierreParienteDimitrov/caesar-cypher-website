import { useState, useEffect } from 'react';
import SolCypher from '../scripts/solresol';
import { translation } from '../scripts/translation';

export default function SolReSol() {
	const [userInput, setUserInput] = useState([]);
	const [userSearch, setUserSearch] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const [counter, setCounter] = useState(0);
	const [output, setOutput] = useState();
	const [result, setResult] = useState([]);
	// console.log(counter);

	// console.log(userInput);

	const submit = (e) => {
		e.preventDefault();
		const userInputArr = userInput.split(' ');
		// console.log(userInputArr);
		setUserSearch(userInputArr);
	};

	const clear = () => {
		setUserInput([]);
		setUserSearch('');
		setCurrentIndex(0);
		setCounter(0);
		setOutput();
		setResult([]);
	};

	const saveResult = (initialIndex, key, value) => {
		const obj = { key, value };
		console.log(initialIndex);

		setCounter(initialIndex + 1);

		setResult([...result, obj]);
		setOutput(null);
		setCurrentIndex(initialIndex + 1);
	};

	useEffect(() => {
		// console.log(userSearch);
		// console.log(currentIndex);
		const value = SolCypher(userSearch, currentIndex);
		// console.log(value);
		setOutput(value);
	}, [userSearch, currentIndex]);

	return (
		<div className='p-4 md:w-10/12 md:m-auto'>
			<div className='h-96 w-full flex items-center'>
				<div>
					<h1 className='text-black z-10 mb-8'>Sol Re Sol</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eos.</p>
				</div>
			</div>

			<div className='w-full mb-10 flex flex-col'>
				<form
					action='submit'
					onSubmit={submit}
					target='/'
					className='flex flex-col w-10/12 m-auto'
				>
					{/* username */}
					<input
						type='text'
						placeholder='Enter one note'
						value={userInput}
						onChange={(e) => setUserInput(e.target.value)}
						className='border-b mb-4'
					/>

					<input type='submit' placeholder='submit' className='cursor-pointer' />
				</form>
				<br />

				<button onClick={clear} className='text-center bg-gray-100 cursor-pointer'>
					Clear
				</button>
			</div>

			{/* Result */}
			<div className='mb-10'>
				<h3>Mots retenus</h3>
				{result &&
					result.map((el, index) => {
						const { key, value } = el;

						return (
							<div key={index} className='mb-6'>
								<p>
									<span className='text-gray-500'> Key {index + 1}: </span>
									<strong>{key}</strong>
								</p>
								<p>
									<span className='text-gray-500'> Mot {index + 1}: </span>
									<strong>{value}</strong>
								</p>
							</div>
						);
					})}
			</div>

			{/* Translation */}
			<div>
				<h3>Traduction</h3>
				{output &&
					output.map((el, index) => {
						const { key, value } = el;

						const initialIndex = index + counter;
						console.log(initialIndex);

						return (
							<div className='p-6 border-b' key={index}>
								<p>Note: {key}</p>
								<h3>{value}</h3>
								<br />
								<button
									onClick={() => saveResult(initialIndex, key, value)}
									className='border p-2'
								>
									Choisir ce mot
								</button>
							</div>
						);
					})}
			</div>
		</div>
	);
}
