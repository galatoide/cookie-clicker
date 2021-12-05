const Upgrade = ({
	count,
	clicks,
	cost,
	clicksAdded,
	setClicks,
	setCount,
	upgrade,
}) => {
	// console.log(count, clicks, cost);

	// Cursor upgrade
	const handleUpgrade = () => {
		if (count >= upgrade) {
			setClicks(clicks + (clicksAdded - 1));
			setCount(count - upgrade);
			// console.log(clicks);
		}
	};

	return (
		<div className='upgrades-box'>
			{/* Cursor Button */}
			<button
				onClick={() => {
					handleUpgrade();
				}}
				className='App'>
				<p>Cursor</p>
			</button>

			<p>Cost: {cost}</p>
			<p>Clicks added: {clicksAdded}</p>
		</div>
	);
};

export default Upgrade;
