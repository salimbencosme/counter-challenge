import React from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import ItemList from './ItemList';

const Content = props =>{

    return(
        <>  
        { props.list.length > 0 ?
            <Container className="shadow-sm rounded content">
                <Row className="special-row">
                    <ItemList 
                        list={props.list}
                        actionIncrement={props.actionIncrement}
                        actionRemove={props.actionRemove}
                     />
                </Row>
            </Container>

            : ''

        }

        </>
    );

}

export default Content;