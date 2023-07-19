import React, { useState } from 'react';
import { Products } from '../date/Products';
import { ProductSlide } from '../Components/ProductSlide';

export function Slider() {
	const [index, setIndex] = useState(0);

	const handleNext = () => {
		// Увеличить индекс на +1, начать массив сначала при достижении конца
		setIndex((index + 1) % Products.length);
	};

	const handlePrev = () => {
		// Уменьшить индекс на -1, продолжить массив с конца при достижении начала
		setIndex((index - 1 + Products.length) % Products.length);
	};
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
											// maxWidth: "1100px",
											alignItems: 'center',
											// transform: "translate3d(-1200px, 0px, 0px)"
										}}
									>
										<div
											className='slick-cloned flex slide-item slick-slide align-items-center'
											data-slick-index='-4'
											id=''
											aria-hidden='true'
										>
											{Products.slice(index, index + 4).map(product => (
												<ProductSlide product={product} key={product.id} className='' />
											))}
										</div>
									</div>
								</div>
								<button className='slick-next slick-arrow' aria-label='Next' type='button' onClick={handleNext}>
									Next
								</button>
							</div>
							{/* {moveToTheEnd} */}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
