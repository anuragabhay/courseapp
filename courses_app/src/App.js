// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Course from './components/Course';
import { Col, Container, Row } from 'reactstrap';
import AllCourses from './components/AllCourses';
import AddCourse from './components/AddCourse';


function App() {
  return (
    
    <div>
      <ToastContainer/>
      <Container>
        <Header/>
        <Row>
          <Col md={4}>
          <h2>This is menu side</h2>
          
          </Col>

          <Col md={8}>
          <h2>This is content side</h2>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
    {/* <div>
      <ToastContainer />
      <Container className=" justify-content-center mt-4 mb-5">
        <Row>
          <Col md="4">
            <Course course={{ title: "Java Course", subtitle: "3 hours", description: "This is simple Java course" }} />
          </Col>
          <Col md="4">
            <Course course={{ title: "React Course", subtitle: "2 hours", description: "This is simple React course" }} />
          </Col>
          <Col md="4">
            <Course course={{ title: "Angular Course", subtitle: "2.5 hours", description: "This is simple Angular course" }} />
          </Col>
        </Row>
      </Container>
    </div></>
    <div>
      <Header name = "Anurag Abhay" description = "Gazab aadmi hai" />
      <hr/> 
      <Header name = "Abhishekwa" description = "Betichod hai"/>
    </div> */}

