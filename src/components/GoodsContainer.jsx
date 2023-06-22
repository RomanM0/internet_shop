import React from 'react'
import Goods from './Goods';

const goods = [
  { id:121, title: "Крісло", price: 300, pic: 'https://raw.githubusercontent.com/RomanM0/project_images/main/chair_office.png', color: 'black', description: "Крісло офісне", amount: 10, discount: 0},
  { id:150, title: "Стілець",  price: 320, pic: 'https://raw.githubusercontent.com/RomanM0/project_images/main/chair.png', color: 'brown', description: "Стілець дерев'яний", amount: 10, discount: 0}];
  
export default function GoodsContainer() {
  return (
     <div className="GoodsContainer">
        {goods.map(item => <Goods id={item.id} title={item.title} pic={item.pic} price={item.price} color={item.color} amount={item.amount}  />)}
      </div>
  )
}
