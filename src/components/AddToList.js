import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const AddToList = ({ name, rating, id, addToList }) => {

    const [lists, setLists] = useState();

    // API-CALL: FETCH ALLER LISTEN
    useEffect(() => {
        fetch('https://myfavoriteshows.herokuapp.com/lists')
            .then(res => res.json())
            .then(data => {
                setLists(data);
            })
    }, [])


    return (
        <>
            {/* ERSTELLT DROPDOWN BUTTON FÜR DAS HINZUFÜGEN EINER SHOW IN EINE LISTE */}
            {
                lists &&
                    lists.map((list) => (
                        <Dropdown.Item onClick={() => addToList(name, rating.average, id, list._id)} key={list._id}>
                            {list.name}
                        </Dropdown.Item>
                    ))

            }
        </>
    )
}

export default AddToList
