import react,{useState} from 'react';
import {Container,Row,Col} from 'react-bootstrap'
import CustomButtom from '../UI/CustomButton';


const Header = props =>{

    const formatNumber = x =>{
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return(
        <>
            <Container className="shadow-sm bg-white rounded header">
                <Row>
                    <Col><span className="total-title">Total Increments: {formatNumber(props.totalIncrements)}</span></Col>
                    <Col>
                        <div className="btn-layout-right">
                            <CustomButtom 
                            name={'Add Counter'}
                            color={'primary'} 
                            action={()=>props.dialogLogic(true)} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );

}

export default Header;