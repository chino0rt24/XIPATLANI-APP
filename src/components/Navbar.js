import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Navb() {
  return (
    
        <>
          <Navbar style={{backgroundColor:"deepskyblue"}} variant="dark">
        <Container style={{marginLeft:100}}>
          <Navbar.Brand href="#home">XIPATLANI</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">COBROS</Nav.Link>
            <Nav.Link href="#features">PAQUETES</Nav.Link>
            <Nav.Link href="#pricing">Usuarios</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <br />
        </>
      );
    }

export default Navb;