import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Item, { BgSection1, BgSection2, BgSection3 } from './Item';
import '../Components/BgSection.css';

function BgSection() {
	return (
		<div className='section'>
			<div className='bg-gray'>
				<div className='container pb-70 pt-120'>
					<div className='row'>
						{BgSection1.map(item => (
							<Item item={item} key={item.id} />
						))}
					</div>
				</div>
			</div>
			<div className='bg-white'>
				<div className='container pb-70 pt-120'>
					<div className='row'>
						<div className='col-lg-12 text-center mb-50'>
							<h2>Shop Pages</h2>
						</div>
					</div>
					<div className='row'>
						{BgSection2.map(item => (
							<Item item={item} key={item.id} />
						))}
					</div>
				</div>
			</div>
			<div className='bg-gray'>
				<div className='container pb-70 pt-120'>
					<div className='row'>
						<div className='col-lg-12 text-center mb-50'>
							<h2>Blog Pages</h2>
						</div>
					</div>
					<div className='row'>
						{BgSection3.map(item => (
							<Item item={item} key={item.id} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default BgSection;
