import React from 'react'
import {useCart} from "react-use-cart";

  const ItemCard=(props)=> {
    const {addItem}=useCart();
  return (
    <div className='col-ll col-md-6 col-lg-3 mx-0 mb-4'>
     <div class="card p-0 overflow-hidden h-100 shadow" >
      <img src={props.img} class="card-img-top img-fluid"/>
      <div class="card-body  text-center">
       <h5 class="card-title ">{props.title}</h5>
       <h5 class="card-title ">${props.price}</h5>
       <p class="card-text">{props.desc} </p>
       <button class="btn btn-info" 
       onClick={ () =>addItem(props.item)}
       >Add To Card</button>
      </div>
    </div>    
       
    </div>
  );
};
export default ItemCard;
