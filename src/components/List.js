import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { deleteList } from '../api/api'
import { useHistory } from 'react-router'


const List = ({ _id, name }) => {

    const [display, setDisplay] = useState(false);
    const handleClose = () => setDisplay(false);
    const handleShow = () => setDisplay(true);

    const handleDelete = () => {
        const deleter = async () => {
            await deleteList(_id);       
            handleClose()     
        }
        deleter();
    }

    return (
        <>
            <tr key={_id}>
                <td>1</td>
                <td>{name}</td>
                <td className='text-right'><span onClick={handleShow}>Delete</span></td>
            </tr>

            <Modal show={display} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Delete List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>
                            {`You are about to delete the following list: '${name}'`}
                            <br />
                           Are you sure?
                       </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default List
