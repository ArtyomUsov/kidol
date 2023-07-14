import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CartPage, Checkout, ProductDetails } from '../date/Path';

interface SearchBoxProps {
	setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export function SearchBox({ setSearchActive }: SearchBoxProps) {
	const [active] = useState<boolean>(true);

	const handleClick = () => {
		setSearchActive((prev: boolean) => !prev);
	};
	return (
		<>
			<div className={`search-box-wrapper ${active ? 'show' : ''}`}>
				<div className='search-box-content-inner'>
					<div className='search-box-form-wrap'>
						<div className='search-note'>
							<p>Start typing and press Enter to search</p>
						</div>
						<form action='#' method='post'>
							<div className='search-form position-relative'>
								<label htmlFor='search-input' className='sr-only'>
									Search
								</label>
								<input type='search' className='form-control' placeholder='Search' id='search-input' />
								<button className='search-button'>
									<i className='pe-7s-search'></i>
								</button>
							</div>
						</form>
					</div>
				</div>
				<a href='javascript:;' className='search-close' onClick={handleClick}>
					<i className='pe-7s-close'></i>
				</a>
			</div>
		</>
	);
}
