import {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Item, { BgSection1, BgSection2, BgSection3 } from './Item';
import "../Components/BgSection.css";

function BgSection() {
    return (
      <div className='section'>
        <div className='bg-gray'>
            <div className="container pb-70 pt-120">
                <div className="row">
                { BgSection1.map( (item) => <Item item={item} key={item.id}/> ) }
                </div>
            </div>
        </div>
        <div className='bg-white'>
            <div className="container pb-70 pt-120">
                <div className="row">
                    <div className="col-lg-12 text-center mb-50">
                        <h2>Shop Pages</h2>
                    </div>
                </div>
                <div className="row">
                { BgSection2.map( item => <Item item={item} key={item.id}/> ) }
                </div>
            </div>
        </div>
        <div className='bg-gray'>
            <div className="container pb-70 pt-120">
                <div className="row">
                    <div className="col-lg-12 text-center mb-50">
                        <h2>Blog Pages</h2>
                    </div>
                </div>
                <div className="row">
                { BgSection3.map( item => <Item item={item} key={item.id}/> ) }
                </div>
            </div>
        </div>
      </div>
      )
  }
  
  export default BgSection;


//   const Items2 = () =>{

//     const [itemsMap, setTodosMap] = useState(null)
//     const [item, setItem] = useState(items2[0])

//     useEffect(()=>{
//         var map = new Object();
//         items2.forEach(x=>{
//             map[x.id] = x
//         })
//         setTodosMap(map)
//     }, [items2])

//     const onChangeItem = (e)=>{
//         var id = e.target.value 
//         //use below to find item WITHOUT indexing
//         //findItem(id)
//         //use below to find item WITH indexing
//         setItem(itemsMap[id])
//     }

//     const findItem = (id) =>{
//         var newItem = items2.find(x=>x.id === id)
//         setItem(newItem)
//     };

//     return (<div>
//         Items2: <select  value={item.id} onChange={onChangeItem}>
//         {items2.map(x=>{
//           return <option key={x.id} value={x.id}>{x.title}</option>
//         })}
//         </select>
//       <Item item={item}/>
//       </div>);
    
// };