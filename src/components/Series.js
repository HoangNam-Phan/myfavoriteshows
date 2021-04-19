import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'


const Series = ({ show }) => {

    const [display, setDisplay] = useState(false);
    const handleClose = () => setDisplay(false);
    const handleShow = () => setDisplay(true);

    return (
        <>
            <div onClick={handleShow} className='show mb-5 mx-1 pb-3'>
                <p>
                    {show.name}
                    <span className='rating'> {show.rating.average ?
                            show.rating.average
                            : ''} </span>
                </p>
                {show.image ?
                    <img src={show.image.medium} alt='' />
                    : ''}
            </div>

            <Modal show={display} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{show.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className=''>
                        {show.image ?
                            <img src={show.image.medium} alt="" />
                            : ''}
                        <p>{show.summary}</p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Series
