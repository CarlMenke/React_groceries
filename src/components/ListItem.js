import React, {useState} from 'react';

const ListItem = (props) => {
    return(
      <li className = 'list-item'> 
        {props.item.item}, {props.item.brand}, {props.item.units}
        <button onClick = {() => {props.handleRemoveItem(props.index)}}> X </button>
    </li>
    )
}

export default ListItem 