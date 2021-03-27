import { useState, useEffect } from 'react';
import { ceasarCypher } from './scripts/ceaserCypher';
import styles from '../styles/Home.module.scss';

export default function Home() {
	const [userInput, setUserInput] = useState('');
	const [output, setOutput] = useState('');

	useEffect(() => {
		// console.log(userInput);

		setOutput(ceasarCypher(userInput));
	}, [userInput]);

	return (
		<div>
			<div className='h-96 w-full p-4 flex items-center md:w-10/12'>
				<div>
					<h1 className='text-black z-10 mb-8'>Caesar's Cypher</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eos.</p>
				</div>
			</div>

			<div className='w-full mb-10ç flex flex-col'>
				<form>
					<label htmlFor='userinput'>Type your word</label>
					<input
						value={userInput}
						onChange={(e) => setUserInput(e.target.value)}
						placeholder='Your word'
						type='text'
						name='userinput'
						required
						className='w-full h-12 bg-gray-200 p-2'
					/>
				</form>
			</div>

			<div
				className={`h-full w-full p-4 flex flex-col justify-center ${styles.changeBackground}`}
			>
				<h4>+1 LETTER</h4>
				<h3>{output}</h3>
			</div>
		</div>
	);
}
