const Shimmer = () => {
	return (
		<>
			<div className='shimmer-search'></div>
			<div className='shimmer-container mx-auto my-5'>
				{Array(12)
					.fill(null)
					.map((each, index) => {
						return <div key={index} className='shimmer-card'></div>;
					})}
			</div>
		</>
	);
};

export default Shimmer;
