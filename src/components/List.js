import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { deleteList } from '../api/api'
import { Link } from 'react-router-dom'

const List = ({ _id, name, rerender }) => {

    const [display, setDisplay] = useState(false);
    const handleClose = () => setDisplay(false);
    const handleShow = () => setDisplay(true);

    const handleDelete = () => {
        const deleter = async () => {
            await deleteList(_id);
            handleClose()
            rerender()
        }
        deleter();

    }

    return (
        <>
            <tr key={_id}>
                <td>1</td>
                <td className='d-flex'>{name}
                    <div>
                       <Link to={`/lists/${_id}`}> <span className='editBtn'>Edit</span></Link>
                        <span className='deleteBtn' onClick={handleShow}>Delete</span>
                    </div>
                </td>
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
