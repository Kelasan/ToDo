import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { db } from '../firebase/config';
import { doc, deleteDoc } from "firebase/firestore";

import { useDispatch } from "react-redux";
import { EditNote } from "../action/noteAction";



function Userform(props) {
	const [title, setTitle] = useState(props.listInfo.title);
	const [date, setDate] = useState(props.listInfo.date);
	const [text, setText] = useState(props.listInfo.text);
	const dispatch = useDispatch();

    const EditsMoreNotes =(e)=>{
            e.preventDefault();
		dispatch(EditNote({id: props.listInfo.id, title, date, text }));
		   setTitle("");
		   setDate("");
		setText("");
		props.hide();
		
		}

		
	return (
		<Form className="modacont">
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Title </Form.Label>
				<Form.Control
				required
					type="text"
					value={title}
					placeholder="Enter Title"
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
			</Form.Group>
			
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Title </Form.Label>
				<Form.Control
				required
					type="date"
					value={date}
					onChange={(e) => {
						setDate(e.target.value);
					}}
				/>
			</Form.Group>
		
			

			<Form.Group className="mb-3" controlId="formBasicPassword">
				<Form.Label>Note text </Form.Label> 
				<Form.Control type="text" value={text} as="textarea" placeholder="Leave Note Test" 
      onChange={(e)=>{setText(e.target.value)}}
      />
			</Form.Group>

			<Button title="Submit" onClick={EditsMoreNotes} variant="primary" type="submit">
			<span class="material-symbols-outlined">
			add_box
			</span>
			</Button>
		</Form>
	);
}

export default Userform;