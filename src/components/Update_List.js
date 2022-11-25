import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Update_List = ({ deleteOneBlog, listsId, listsName, updateBlog }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [listName, setNewListName] = useState()

    const handleDelete = () => {
        deleteOneBlog(listsId)
        setShow(false)
    }
    const handleUpdate = () => {
        updateBlog(listsId, listName)
        setShow(false)
    };
    return (
        <div>

            <Button variant="secondary" onClick={handleShow} className="me-2 w-100 h-100">
                Settings
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Settings</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                placeholder={listsName}
                                type="text"
                                autoFocus
                                onChange={(e) => (setNewListName(e.target.value))}
                            />
                        </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Delete
                    </Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Update
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Update_List