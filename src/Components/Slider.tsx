import React, { useEffect, useState } from 'react';
import { Products } from '../date/Products';
import { ProductSlide } from '../Components/ProductSlide';

export function Slider() {
	const [index, setIndex] = useState(0);
	const [addIndex, setAddIndex] = useState(4);
	const handleNext = () => {
		setIndex((index + 1) % Products.length);
	};
	const handlePrev = () => {
		setIndex((index - 1 + Products.length) % Products.length);
	};
	useEffect(() => {
		const updateAddIndex = () => {
			const windowWidth = window.innerWidth;
			let newIndex = 4;
			if (windowWidth <= 768) {
				newIndex = 1;
			} else if (windowWidth <= 991) {
				newIndex = 2;
			} else if (windowWidth <= 1200) {
				newIndex = 3;
			}
			setAddIndex(newIndex);
		};

		window.addEventListener('resize', updateAddIndex);
		updateAddIndex();

		return () => window.removeEventListener('resize', updateAddIndex);
	}, []);

	return (
		<>
			<section className='product-area product-style2-area'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-6 m-auto'>
							<div
								className='section-title text-center aos-init aos-animate'
								data-aos='fade-up'
								data-aos-duration='1000'
							>
								<h2 className='title'>Trending Product</h2>
								<div className='desc'>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et
										dolore magna aliqua.{' '}
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className='row'>
						<div className='col-12'>
							<div
								className='product-tab1-slider aos-init slick-initialized slick-slider aos-animate'
								data-aos='fade-up'
								data-aos-duration='1500'
							>
								<button className='slick-prev slick-arrow' aria-label='Previous' type='button' onClick={handlePrev}>
									Previous
								</button>
								<div className='slick-list draggable'>
									<div
										className='slick-track'
										style={{
											opacity: '1',
											minWidth: '300px',
											alignItems: 'center',
										}}
									>
										<div
											className='slick-cloned flex slide-item slick-slide align-items-center'
											data-slick-index='-4'
											id=''
											aria-hidden='true'
										>
											{Products.slice(index, index + addIndex).map(product => (
												<ProductSlide product={product} key={product.id} className='' />
											))}
										</div>
									</div>
								</div>
								<button className='slick-next slick-arrow' aria-label='Next' type='button' onClick={handleNext}>
									Next
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
