import Image from 'next/image';
// import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';
import { ceasarCypher } from './scripts/ceaserCypher';

export default function Home() {
	const [userInput, setUserInput] = useState('');
	const [output, setOutput] = useState('');

	useEffect(() => {
		// console.log(userInput);

		setOutput(ceasarCypher(userInput));
	}, [userInput]);

	return (
		<div>
			<div className='h-96 w-full flex items-center justify-center relative'>
				<h1 className='text-center text-black z-10'>Caesar's Cypher</h1>
				<img
					src='/bgIMG.png'
					alt=''
					className='absolute top-0 left-0 h-full w-full z-0'
				/>
			</div>

			<form>
				<input
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					placeholder='Your word'
					type='text'
					name='userinput'
					required
					className='w-full h-12 bg-gray-50'
				/>
			</form>

			<h2>Ouput</h2>
			<h1>{output}</h1>
		</div>
	);
}
