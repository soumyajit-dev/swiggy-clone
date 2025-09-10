export const restaurantMenuAccordian = (OriginalComponent) => {
	return ({ category, showItems, setAccordianIndex }) => {
		// const [isAccordianOpen, setIsAccordianOpen] = useState(props.index === 0 ? true : false);
		return (
			<div className='p-4 my-4 bg-white border border-gray-200 rounded-lg shadow-lg'>
				<div
					className='flex justify-between items-center cursor-pointer'
					onClick={() => {
						setAccordianIndex();
					}}>
					<h2 className='font-bold text-base'>
						{category?.title} ({category?.itemCards.length})
					</h2>
					{showItems ? (
						<svg className='w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
							<path d='M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z' />
						</svg>
					) : (
						<svg className='w-4' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
							<path d='M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z' />
						</svg>
					)}
				</div>

				{showItems ? <OriginalComponent category={category} /> : null}
			</div>
		);
	};
};
