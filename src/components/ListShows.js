import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { RiDeleteBin5Fill } from 'react-icons/ri';
import { deleteFromList } from '../api/api'

const ListShows = ({ name, id, rating, listId, rerender }) => {

    // MODAL SETUP
    const [display, setDisplay] = useState(false);
    const handleClose = () => setDisplay(false);
    const handleShow = () => setDisplay(true);

    // API-CALL: LÖSCHT EINE SHOW AUS DER LISTE
    const handleDelete = async (id) => {
        await deleteFromList(id, listId)
        rerender();
        handleClose();
    }

    return (
        <>
            {/* SHOW INFOS */}
            <tr>
                <td><a href={`https://www.tvmaze.com/shows/${id}`}>{name}</a></td>
                <td className='rating'>{rating === null ? 'N/A' : rating}</td>
                <td className='bin' onClick={handleShow}><span className='p-2'><RiDeleteBin5Fill /></span> </td>
            </tr>

            <Modal show={display} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Delete List</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <p>
                            {`You are about to delete the following show from this list: '${name}'`}
                            <br />
                           Are you sure?
                       </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => handleDelete(id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ListShows
