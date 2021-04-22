import React, { useState, useEffect } from 'react'
import AddToList from './AddToList'
import { updateList } from '../api/api'
import img from '../img/img.png'

// React Bootstrap Components
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const Shows = ({ show }) => {

    // MODAL SETUP
    const [display, setDisplay] = useState(false);
    const handleClose = () => setDisplay(false);
    const handleShow = () => setDisplay(true);

    // API-CALL: FETCHED ALLE LISTEN FÜR DIE DROPDOWN-BUTTONS
    const [, setLists] = useState();
    useEffect(() => {
        fetch('http://localhost:4000/lists')
            .then(res => res.json())
            .then(data => {
                setLists(data);
            })
    }, [])

    // API-CALL: ADDED EINE SHOW ZU EINER
    const addToList = (showName, showRating, id, listId) => {
        const fetchList = async () => {
            await updateList(showName, showRating, id, listId)
        }
        fetchList();
        handleClose();
    }


    return (
        <>
            {/* SHOW CONTAINER IM SUCHFELD */}
            <div onClick={handleShow} className='shows mb-5 mx-1 pb-3'>
                <p>
                    {show.name}
                    <span className='rating'> {show.rating.average ?
                        <i>{`(${show.rating.average})`}</i>
                        : ''} </span>
                </p>
                {show.image ?
                    <img src={show.image.medium} alt='' />
                    : <img src={img} alt='' />}
            </div>

            {/* SHOW-DETAILS ONCLICK */}
            <Modal show={display} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{show.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='modalContent'>
                        {show.image ?
                            <img className='modalImg pb-3' src={show.image.medium} alt="" />
                            : ''}
                        <p>{show.summary}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <DropdownButton as={ButtonGroup} title="Add to..." id="bg-nested-dropdown">
                        <AddToList addToList={addToList} {...show} />
                    </DropdownButton>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Shows
