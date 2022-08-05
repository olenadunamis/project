
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Routes,BrowserRouter as Router, Route, Link, } from "react-router-dom";
import CreateEmployee from './components/CreateEmployee'
import EmployeeList from './components/EmployeeList'


function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Navbar bg = "dark" variant = "dark">

        <Container>

        <Navbar.Brand>

          <Link to = {'/create-emp'}className='nav-link'>

            MERN STACK - HELENA I LOVE YOU

          </Link>

        </Navbar.Brand>

        <Nav className='justify-content-end'>

        <Nav> 
        <Link to = {'/emp-list'}className='nav-link'>

          Employee List

          </Link>
          
        </Nav>

        </Nav>

        </Container>

        </Navbar>

        <Container>
          <Row>
            <Col md = {12}>
              <div className='wrapper'>
              <Routes>
              <Route
              exact
              path = "/"
              component ={CreateEmployee}
              ></Route>

              <Route
              exact
              path = "/create-emp"
              component ={CreateEmployee}
              ></Route>

              <Route
              exact
              path = "/emp-list"
              component ={EmployeeList}
              ></Route>
              </Routes>
              </div>
            </Col>
          
          </Row>
        </Container>

      </header>
      </Router>
    </div>
  );
}

export default App;
