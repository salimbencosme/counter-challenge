import React from 'react';
import {Button} from 'react-bootstrap';

const CustomButtom = props =>{
    return(
        <Button 
        title={props.name} 
        variant={props.color} 
        onClick={props.action} >{props.name}</Button>
    );
}

export default CustomButtom;