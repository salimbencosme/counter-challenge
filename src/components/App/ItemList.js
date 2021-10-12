import React from 'react';
import Item from './Item';

const ItemList = props =>{

    const generateList = ()=>{
       let listTemp = []
        props.list.map( obj =>{
            listTemp.push(
             <Item 
             key={obj.id}
             id={obj.id} 
             counter={obj.cont}
             incrementValue={obj.incrementValue}
             actionIncrement={props.actionIncrement}
             actionRemove={props.actionRemove}
              />
            );
        })

        return listTemp;
    }


    return (
        <>
            {generateList()}
        </>
    );    

}

export default ItemList;