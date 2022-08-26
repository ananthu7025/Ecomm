import React from 'react'
import { useSelector } from "react-redux";

const Order = () => {
    const itemList = (item) => {
  var total = 0;
        total = total + item.price;
        return (
          <li className="list-group-item d-flex justify-content-between lh-sm">
            <div>
              <h6 className="my-0">{item.name}</h6>
            </div>
            <span className="text-muted">${item.price}</span>
          </li>
        );
      };
    const state = useSelector((state) => state.addItem);
  return (
    <div> 
        <h1>STate</h1>
         {state.map(itemList)}</div>
  )
}

export default Order