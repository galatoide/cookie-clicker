import { useState } from 'react';
import useSound from 'use-sound';
import click from '../sounds/click.wav';
import cookie from '../images/cookie.png';

const Cookies = () => {
	const [count, setCount] = useState(0); //Counter
	const [clickSound] = useSound(click); //Click Sound
	const [clicks, setClicks] = useState(1); // the clicks counter

	// Cursor upgrade
	const handleCursor = () => {
		if (count >= 15) {
			setClicks(clicks + 1);
			setCount(count - 15);
			// console.log(clicks);
		}
	};

	// Grandma upgrade
	const handleGrandma = () => {
		if (count >= 50) {
			setClicks(clicks + 9);
			setCount(count - 50);
		}
	};

	return (
		<div className='container'>
			{/* Cookie Button */}
			<button className='App'>
				<img
					src={cookie}
					className='cookie'
					alt='cookie'
					onClick={() => {
						setCount(count + clicks);
						// console.log(count);
					}}
					onMouseDown={clickSound}
				/>
				{/* <h1>Cookie</h1> */}
			</button>

			<h1>Bakery: {count}</h1>

			{/* Cursor Button */}
			<button
				onClick={() => {
					handleCursor();
				}}
				className='App'>
				<p>Cursor</p>
			</button>

			{/* Grandma Button */}
			<button
				onClick={() => {
					handleGrandma();
				}}
				className='App'>
				<p>Grandma</p>
			</button>

			{/* Reset Button */}
			<button
				onClick={() => {
					setCount(0);
					setClicks(0);
					console.log(count);
				}}
				className='reset'>
				<p>Reset</p>
			</button>
		</div>
	);
};

export default Cookies;
