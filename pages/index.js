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
			<h1>Caesar Cypher</h1>

			<form>
				<input
					value={userInput}
					onChange={(e) => setUserInput(e.target.value)}
					placeholder='Your word'
					type='text'
					name='userinput'
					required
				/>
			</form>

			<h2>Ouput</h2>
			<h1>{output}</h1>
		</div>
	);
}
