const Shimmer = () => {
	return (
		<div className='mt-16'>
			<div className='shimmer-search'></div>
			<div className='shimmer-container'>
				{Array(10)
					.fill(null)
					.map((each, index) => {
						return <div key={index} className='shimmer-card'></div>;
					})}
			</div>
		</div>
	);
};

export default Shimmer;
