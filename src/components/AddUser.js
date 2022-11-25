import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Dropdown from 'react-bootstrap/Dropdown';

const AddUser = ({ listsId, AddUserPost, usersList, ...props }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClick = (e) => {
        AddUserPost(listsId, e)
        setShow(false)
    }
    return (
        <div>


            <>
                <Button variant="success" onClick={handleShow} className="me-2 w-100 h-100">
                    Add Member
                </Button>
                <Offcanvas show={show} onHide={handleClose} {...props}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Dropdown.Menu className='w-75' show>

                            {usersList?.map((index, key) => {
                                return <Dropdown.Item onClick={() => { handleClick(index.name) }} className='w-100'>{index.name}</Dropdown.Item>
                            })}

                        </Dropdown.Menu>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        </div>
    )
}

export default AddUser