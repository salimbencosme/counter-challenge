import React from "react";
import {Card} from 'react-bootstrap';
import CustomButtom from '../UI/CustomButton';

const Item = props =>{

    return(

        <>
           <Card className="card-custom">
            <Card.Body>
                <Card.Title>{props.counter}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                <CustomButtom 
                            name={'Increment'}
                            color={'primary'} 
                            action={()=>{props.actionIncrement(props.id)}} />
                    
                </Card.Subtitle>
            <Card.Text>
            <CustomButtom 
                            name={'Remove'}
                            color={'danger'} 
                            action={()=>{props.actionRemove(props.id)}} />
            <Card.Subtitle className="mb-1 text-muted increment-style">Increment by {props.incrementValue}</Card.Subtitle>
 
    </Card.Text>
   
               
            </Card.Body>
            </Card>
        </>

    );
};

export default Item;