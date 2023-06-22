import React from 'react'

export default function Goods(props) {
  return (
    <div className='goodsItem'>
      <div className="goodsItemContainer">
      <h3 className='itemName'>{props.title}</h3>
      <h3 className="itemPrice">{props.price} ₴</h3>
      </div>
        <img className="goodsPic" src={props.pic} alt='good'></img>
        <div className="goodsItemContent">
         <p> Кількість: {props.amount} шт.</p>

         <div className="itemColorContainer flexbox">
         Колір: <div className="itemColor" style={{backgroundColor: props.color}}></div>
         </div>
         <div className="itemBuyContainer">
         <button className='itemBuy' id={props.id}>Купити</button>
         </div>
        </div>
    </div>
  )
}
