import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { AddNewNote } from "../action/noteAction";
import { db } from '../firebase/config';
import { doc, setDoc } from "firebase/firestore";



function Userform(props) {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [text, setText] = useState("");
	const dispatch = useDispatch();

    const Adds =(e)=>{
            e.preventDefault();
			let newNote = { title, date, text, id: uuid() };
		dispatch(AddNewNote(newNote));
        //    props.newAdds({name, phone, location})
		   console.log(newNote); 
		   setTitle('');
		   setDate('');
		setText('')
		}

const Cancel =(e)=>{
e.preventDefault();
setTitle('');
		   setDate('');
		setText('')
}


	return (
		<Form>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Title </Form.Label>
				<Form.Control
				required
					type="text"
					placeholder="Enter Title"
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
				/>
			</Form.Group>
			<Form.Group className="mb-3" controlId="formBasicEmail">
				<Form.Label>Date </Form.Label>
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

			<Button title="Submit" onClick={Adds} variant="primary" type="submit">
			<span class="material-symbols-outlined">
add_box
</span>
			</Button>
			<Button title="Cancel" onClick={Cancel} variant="primary" type="submit">
			<span class="material-symbols-outlined">
cancel
</span>
			</Button>
		</Form>
	);
}

export default Userform;