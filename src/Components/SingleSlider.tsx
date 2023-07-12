// import '../../src/Swiper/swiper.min.js';
import React, { useState } from 'react';
import thirteen from '../img/shop/13.webp';
import fourteen from '../img/shop/14.webp';
import fifteen from '../img/shop/15.webp';
import nav1 from '../img/shop/nav1.webp';
import nav2 from '../img/shop/nav2.webp';
import nav3 from '../img/shop/nav3.webp';

export function SingleSlider() {
	const [activeTab, setActiveTab] = useState(1);
	return (
		<>
			<div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-0'>
				<div className='single-product-slider'>
					<div className='single-product-thumb'>
						<div className='swiper-container single-product-thumb-slider swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-free-mode'>
							<div className='swiper-wrapper' style={{ transitionDuration: '0ms' }}>
								<div
									className='swiper-slide zoom zoom-hover'
									style={{
										width: '570px',
										opacity: '1',
										transform: 'translate3d(0px, 0px, 0px)',
										position: 'relative',
										overflow: 'hidden',
										transitionDuration: '0ms',
									}}
								>
									{activeTab === 1 && (
										<div className='thumb-item'>
											<a className='lightbox-image' href={thirteen}>
												<img src={thirteen} alt='Image-HasTech' />
											</a>
										</div>
									)}
									{/* <img
										role='presentation'
										alt=''
										src={thirteen}
										className='zoomImg'
										style={{
											position: 'absolute',
											top: '0px',
											left: '0px',
											opacity: '0',
											width: '570px',
											height: '648px',
											border: 'none',
											maxWidth: 'none',
											maxHeight: 'none',
										}}
									/> */}
								</div>
								<div
									className='swiper-slide zoom zoom-hover '
									style={{
										width: '570px',
										opacity: '1',
										transform: 'translate3d(-570px, 0px, 0px)',
										position: 'relative',
										overflow: 'hidden',
										transitionDuration: '0ms',
									}}
								>
									{activeTab === 2 && (
										<div className='thumb-item'>
											<a className='lightbox-image' href={fourteen}>
												<img src={fourteen} alt='Image-HasTech' />
											</a>
										</div>
									)}
									{/* <img
										role='presentation'
										alt=''
										src={fourteen}
										className='zoomImg'
										style={{
											position: 'absolute',
											top: '0px',
											left: '0px',
											opacity: '0',
											width: '570px',
											height: '648px',
											border: 'none',
											maxWidth: 'none',
											maxHeight: 'none',
										}}
									/> */}
								</div>
								<div
									className='swiper-slide zoom zoom-hover '
									style={{
										width: '570px',
										opacity: '1',
										transform: 'translate3d(-1140px, 0px, 0px)',
										position: 'relative',
										overflow: 'hidden',
										transitionDuration: '0ms',
									}}
								>
									{activeTab === 3 && (
										<div className='thumb-item'>
											<a className='lightbox-image' href={fifteen}>
												<img src={fifteen} alt='Image-HasTech' />
											</a>
										</div>
									)}
									{/* <img
										role='presentation'
										alt=''
										src={fifteen}
										className='zoomImg'
										style={{
											position: 'absolute',
											top: '0px',
											left: '0px',
											opacity: '0',
											width: '570px',
											height: '648px',
											border: 'none',
											maxWidth: 'none',
											maxHeight: 'none',
										}}
									/> */}
								</div>
							</div>
							<span className='swiper-notification' aria-live='assertive' aria-atomic='true'></span>
						</div>
					</div>
					<div className='single-product-nav'>
						<div className='swiper-container single-product-nav-slider swiper-container-initialized swiper-container-horizontal swiper-container-free-mode swiper-container-thumbs'>
							<div
								className='swiper-wrapper'
								style={{ transform: 'translate3d(0px, 0px, 0px)', transitionDuration: '0ms' }}
							>
								<div className='swiper-slide swiper-slide-active' style={{ width: '126.667px', marginRight: '11px' }}>
									<div className={`nav-item ${activeTab === 1 ? 'active' : ''}`} onClick={() => setActiveTab(1)}>
										<img src={nav1} alt='Image-HasTech' />
									</div>
								</div>
								<div className='swiper-slide swiper-slide-next' style={{ width: '126.667px', marginRight: '11px' }}>
									<div className={`nav-item ${activeTab === 2 ? 'active' : ''}`} onClick={() => setActiveTab(2)}>
										<img src={nav2} alt='Image-HasTech' />
									</div>
								</div>
								<div
									className='swiper-slide swiper-slide-thumb-active'
									style={{ width: '126.667px', marginRight: '11px' }}
								>
									<div className={`nav-item ${activeTab === 3 ? 'active' : ''}`} onClick={() => setActiveTab(3)}>
										<img src={nav3} alt='Image-HasTech' />
									</div>
								</div>
							</div>
							<span className='swiper-notification' aria-live='assertive' aria-atomic='true'></span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
