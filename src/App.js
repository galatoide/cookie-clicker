import { useState } from 'react';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<div
				onClick={() => {
					setCount(count + 1);
					console.log(count);
				}}
				className='App'>
				<h1>Cookie</h1>
			</div>
			<h1>{count}</h1>
		</div>
	);
}

export default App;
