// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { Link } from 'react-router-dom';
// import { CgProfile } from "react-icons/cg";


// function Navebar() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container fluid>
//         <Navbar.Brand href="#">LOGO</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbarScroll" />
//         <Navbar.Collapse id="navbarScroll">
//           <Nav
//             className="me-auto my-2 my-lg-0"
//             style={{ maxHeight: '100px' }}
//             navbarScroll
//           >


//           </Nav>
//           <Form className="d-flex menu">
//             <Nav.Link href="#action1">
//               <Link to='/name'>Home </Link>
//             </Nav.Link>

//             <Nav.Link href="#action1">
//               <Link to='/name'>Product/Services</Link>
//             </Nav.Link>

//             <Nav.Link href="#action1">
//               <Link to='/name'>My Treatment</Link>
//             </Nav.Link>
//             <Nav.Link href="#action1">` `
//               <Link to='/name'>About</Link>
//             </Nav.Link>
//             <Nav.Link href="#action1">
//               <Link to='/name'>Contact</Link>
//             </Nav.Link>

//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default Navebar;


import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navebar() {
  return (
    <div className="container">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">LOGO</Navbar.Brand>
          <div>
            <Button className='button1' variant="outline-success" >Contact</Button>
            <Navbar.Toggle aria-controls="navbarScroll" />
          </div>

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"

              navbarScroll
            >
            </Nav>
            <Form className="menu">

              <Nav.Link href="#action1">
                <Link to="/"> Home </Link></Nav.Link>
              <Nav.Link href="#action1"><Link to="/products"> Product/Services </Link></Nav.Link>
              <Nav.Link href="#action1"><Link to="/cart"> My cart</Link></Nav.Link>
              <Nav.Link href="#action1"><Link to="/Consultation"> Consultation</Link></Nav.Link>
              <Nav.Link href="#action1">About</Nav.Link>

              <Link to="contact"> <Button className='button' variant="outline-success" > Contact </Button></Link>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navebar;