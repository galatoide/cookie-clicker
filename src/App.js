import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			{/* Cookie Button */}
			<button
				onClick={() => {
					setCount(count + 1);
					console.log(count);
				}}
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
