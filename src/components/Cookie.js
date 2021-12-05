import { useState } from 'react';
import useSound from 'use-sound';
import click from '../sounds/click.wav';
import cookie from '../images/cookie.png';
import Upgrade from './Upgrade';

const Cookies = () => {
	const [count, setCount] = useState(0); //Counter
	const [clickSound] = useSound(click); //Click Sound
	const [clicks, setClicks] = useState(1); // the clicks counter

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

			<h2>Upgrades</h2>

			<div className='upgrades'>
				{/* Cursor Button */}
				<Upgrade
					count={count}
					clicks={clicks}
					setClicks={setClicks}
					setCount={setCount}
					upgrade='15'
					cost='15'
					clicksAdded='2'
				/>

				{/* Grandma Button */}
				<Upgrade
					count={count}
					clicks={clicks}
					setClicks={setClicks}
					setCount={setCount}
					upgrade='50'
					cost='50'
					clicksAdded='5'
				/>

				{/* Farm Button */}
				<Upgrade
					count={count}
					clicks={clicks}
					setClicks={setClicks}
					setCount={setCount}
					upgrade='100'
					cost='100'
					clicksAdded='10'
				/>

				{/* Mine Button */}
				<Upgrade
					count={count}
					clicks={clicks}
					setClicks={setClicks}
					setCount={setCount}
					upgrade='250'
					cost='250'
					clicksAdded='20'
				/>

				{/* Factory Button */}
				<Upgrade
					count={count}
					clicks={clicks}
					setClicks={setClicks}
					setCount={setCount}
					upgrade='2500'
					cost='2500'
					clicksAdded='30'
				/>
			</div>

			{/* Reset Button */}
			<button
				onClick={() => {
					setCount(0);
					setClicks(1);
					// console.log(count);
				}}
				className='reset'>
				<p>Reset</p>
			</button>
		</div>
	);
};

export default Cookies;
