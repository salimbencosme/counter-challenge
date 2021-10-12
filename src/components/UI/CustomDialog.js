import React,{useState} from 'react';
import {Modal,Dropdown,Row,Col} from 'react-bootstrap';
import CustomButtom from '../UI/CustomButton';

const CustomDialog = props =>{

    const [type,setType] = useState('default');
    const [incrementValue,setIncrementValue] = useState(1);

    const sendInfoToCreate=()=>{
        props.action(incrementValue);
        props.dialogLogic(false);
    }

    const generateOptions =()=>{
        let temp = []
        for(let x=2;x<=10;x++)
            temp.push(<Dropdown.Item onClick={()=>setIncrementValue(x)}>{x}</Dropdown.Item>);
        return temp;
    }

    return (
        <>
         <Modal
                show={true}
                backdrop="static"
                keyboard={false}
            >
             <Modal.Header>
                <Modal.Title><span className="dialog-title">Select the type of counter</span></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>

                    <Col>

                    <span className="dialog-title">Selected type:</span>
                    <Dropdown>
                    <Dropdown.Toggle variant="warning" id="dropdown-basic">
                        {type.toUpperCase()}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={()=>{setType('default');setIncrementValue(1)}}>Default (Increment by 1)</Dropdown.Item>
                        <Dropdown.Item onClick={()=>{setType('intervals');setIncrementValue(2)}}>Interval (Custom increment)</Dropdown.Item>
                    </Dropdown.Menu>
                    </Dropdown>
                    
                    </Col>    
                    

                    <Col>

                    { type === 'intervals' ? 
                        <>
                            <span className="dialog-title">Selected increment:</span>
                            <Dropdown>
                            <Dropdown.Toggle variant="warning" id="dropdown-basic2">
                                {incrementValue}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {generateOptions()}

                            </Dropdown.Menu>
                            </Dropdown>
                        </>

                        : ''

                        }
                                            
                    </Col>
                    
                    </Row>

                </Modal.Body>
                <Modal.Footer>
                <CustomButtom 
                name={'Close'}
                color={'secondary'} 
                size={12} 
                action={()=>props.dialogLogic(false)} />

             <CustomButtom 
                name={'Create'}
                color={'dark'} 
                size={12} 
                action={()=>sendInfoToCreate()} />
                </Modal.Footer>
            </Modal>
            

        </>
    );

};

export default CustomDialog;