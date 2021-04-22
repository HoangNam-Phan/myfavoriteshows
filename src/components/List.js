import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { deleteList } from '../api/api'
import { Link } from 'react-router-dom'
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { AiFillEdit } from 'react-icons/ai';

const List = ({ _id, name, rerender }) => {

    // MODAL SETUP
    const [display, setDisplay] = useState(false);
    const handleClose = () => setDisplay(false);
    const handleShow = () => setDisplay(true);

    // API-CALL: LISTE LÖSCHEN
    const handleDelete = async () => {
        await deleteList(_id);
        handleClose()
        rerender()
    }

    return (
        // GIBT LISTENNAMEN UND BUTTONS WIEDER
        <>
            <tr className='d-flex' key={_id}>
                <td className='listName'>
                    <span> {name}</span>
                </td>
                <td>
                    <Link to={`/lists/${_id}`}> <span className='listEditBtn p-2'><AiFillEdit /></span></Link>
                </td>
                <td>
                    <span className='bin p-2' onClick={handleShow}><RiDeleteBin5Fill /></span>
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
