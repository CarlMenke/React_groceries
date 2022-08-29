import React, {useState} from 'react';
import  ListItem from './ListItem.js';

const List = (props) => {
    const [[...list], manageList] = useState([
        {
          item: 'Tomato',
          brand:'kroger',
          units: '3',
          quantity: 0,
          isPurchased: false
        },    
        {
          item: 'bananna',
          brand:'kroger',
          units: '2',
          quantity: 0,
          isPurchased: false
        },
        {
          item: 'cereal',
          brand:'kroger',
          units: '1',
          quantity: 0,
          isPurchased: false
        }
      ])

    const handleRemoveItem = (index) => {

        let newList = list;
        newList[index].isPurchased = true;

        console.log(newList)
        manageList(newList)

    }
    return(
        <>
            <ul className = 'list' >
                <div className = 'title'> Groceries: </div>
                {list.map((item,index) => {
                    if(!item.isPurchased){
                    return (<ListItem handleRemoveItem = {handleRemoveItem} item = {item} key = {index} index = {index} />)}
                })}
            </ul>
    </>
    )
}

export default List