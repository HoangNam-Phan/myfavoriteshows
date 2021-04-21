import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import ButtonGroup from 'react-bootstrap/ButtonGroup'

const Shows = ({ show }) => {

    const [display, setDisplay] = useState(false);
    const handleClose = () => setDisplay(false);
    const handleShow = () => setDisplay(true);

    return (
        <>
            <div onClick={handleShow} className='series mb-5 mx-1 pb-3'>
                <p>
                    {show.name}
                    <span className='rating'> {show.rating.average ?
                        show.rating.average
                        : ' '} </span>
                </p>
                {show.image ?
                    <img src={show.image.medium} alt='' />
                    : ''}
            </div>

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
                        <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
                    </DropdownButton>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Shows
