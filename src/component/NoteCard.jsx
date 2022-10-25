import React,{useState} from 'react'
import Button from "react-bootstrap/Button";

import {Col, Modal} from 'react-bootstrap'
import EditNote from './EditNote';
import { connect } from "react-redux";
import Table from 'react-bootstrap/Table';
import { DeleteOneNote } from '../action/noteAction';

function CustomersInfo(props) {
  const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	

  

    const DeleteMyNote=(e)=>{
      e.preventDefault();
      props.DeleteOneNote(props.listInfo.id)
    }

    


   
  return (
    
    <div>
   
    <Modal  show={show} onHide={handleClose}>
    <Modal.Header closeButton className='modacont'>
      <Modal.Title  ><h3>Feel Free To Edit Your Input</h3></Modal.Title>
    </Modal.Header>
    <EditNote hide={handleClose}  listInfo={props.listInfo}/>
    <Modal.Body className='modacont'>
      
    </Modal.Body>
  </Modal>



 <div className="tablemain">
    <Col  >
    
    <Table striped>
    <thead>
      <tr>
        
        <th>Title</th>
        <th>Date Recorded</th>
        <th>Note Text</th>
      </tr>
    </thead>
    <tbody>
      <tr>
       
        
        <td>{props.listInfo.title}</td>
        <td>{props.listInfo.date}</td>
        <td>{props.listInfo.text}</td>

        <td>
        <Button title="Edit" onClick={handleShow} variant="primary" size="sm">
        <span class="material-symbols-outlined">
edit_square
</span>
      </Button>
      <Button title="Delete" onClick={DeleteMyNote} variant="secondary" size="sm">
      <span class="material-symbols-outlined">
      delete
      </span>
      </Button>
        
        </td>
        
      </tr>
      
    
    </tbody>
  </Table>
            </Col>
            </div>
    </div>
  )
}

const mapDispatch={
  DeleteOneNote
};

export default connect(null, mapDispatch)(CustomersInfo);