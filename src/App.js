import { useState } from 'react';
import useSound from 'use-sound';
import click from '../src/sounds/click.wav';
import cookie from '../src/images/cookie.png';
import './App.scss';

function App() {
	const [count, setCount] = useState(0); //Counter
	const [clickSound] = useSound(click); //Click Sound

	return (
		<div>
			{/* Cookie Button */}
			<button className='App'>
				<img
					src={cookie}
					className='cookie'
					alt='cookie'
					onClick={() => {
						setCount(count + 1);
						console.log(count);
					}}
					onMouseDown={clickSound}
				/>
				{/* <h1>Cookie</h1> */}
			</button>

			<h1>{count}</h1>

			{/* Reset Button */}
			<button
				onClick={() => {
					setCount(0);
					console.log(count);
				}}
				className='App'>
				<p>Reset</p>
			</button>
		</div>
	);
}

export default App;
