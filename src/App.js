import { useState } from 'react';
import useSound from 'use-sound';
import click from '../src/sounds/click.wav';

function App() {
	const [count, setCount] = useState(0); //Counter
	const [clickSound] = useSound(click); //Click Sound

	return (
		<div>
			{/* Cookie Button */}
			<button
				onClick={() => {
					setCount(count + 1);
					console.log(count);
				}}
				onMouseDown={clickSound}
				className='App'>
				<h1>Cookie</h1>
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
