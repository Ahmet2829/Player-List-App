import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Add_List from './Add_List';

const NavbarTop = ({ AddPost }) => {
    return (
        <div>
            <Navbar bg="dark" variant="light">
                <Container>
                    <Navbar.Brand className='text-light' href="#home"><h3>Player-List</h3></Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Add_List AddPost={AddPost}/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarTop