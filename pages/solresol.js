import { useState, useEffect } from 'react';
import SolCypher from '../scripts/solresol';

export default function SolReSol() {
	const [userInput, setUserInput] = useState([]);
	const [userSearch, setUserSearch] = useState('');

	const [output, setOutput] = useState();
	// console.log(userInput);

	const submit = (e) => {
		e.preventDefault();
		const userInputArr = userInput.split(' ');
		// console.log(userInputArr);
		setUserSearch(userInputArr);
	};

	useEffect(() => {
		// console.log(userSearch);
		const value = SolCypher(userSearch);
		// console.log(value);
		setOutput(value);
	}, [userSearch]);

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
			</div>

			<div>
				<h3>Traduction</h3>
				{output &&
					output.map((el, index) => {
						console.log(el);
						return (
							<div className='p-6 border-b' key={index}>
								<p>{el.key}</p>
								<p>{el.value}</p>
							</div>
						);
					})}
			</div>
		</div>
	);
}
