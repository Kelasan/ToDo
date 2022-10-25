//import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { Row, Col, Container } from "react-bootstrap";
import {db} from './firebase/config'
import NoteMap from "./component/NoteMap"
import NoteForm from "./component/NoteForm.jsx";
import NavB from "./component/NavB"
import { useDispatch } from 'react-redux';
import { collection, query, onSnapshot } from 'firebase/firestore';


function App() {
  // const dispatch = useDispatch()
  // useEffect(()=> {
  //   const readData = async ()=> {
  //     const q = query (collection(db, "ToDo"));
  //     const unsubscribe = onSnapshot(q, (querySnapshot)=> {
  //       const listArr = [];querySnapshot.forEach((doc)=> {
  //         listArr.push(doc.data());
  //       });
  //       dispatch(addListItem(listArr))
  //       console.log(listArr);
  //     });
  //   };
  //   readData()
  // }, []
  // )
  return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  <div className="main">
		<NavB />
			<Container>
			
				<Row>
					<Col className="col1" md={2}>
				<NoteForm />
					</Col>
          <Col className="col2" >
          <NoteMap />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default App;
