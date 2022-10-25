import React from "react";
import NoteCard from "./NoteCard";
import { Row, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { db } from '../firebase/config';
import { doc, deleteDoc } from "firebase/firestore";


function User(props) {

  const { notebook } = useSelector((state) => {
		return state;
	});

	return (
		<Container>
			<Row>
        {notebook.map((item, index) => {
            return (
               <NoteCard
               key={index} 
               listInfo={item}
              
               />


                
            );
          })}
          </Row>
          </Container>
	);
}

export default User;