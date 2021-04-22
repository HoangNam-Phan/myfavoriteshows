import React, { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

const AddToList = ({ name, rating, id, addToList }) => {

    const [lists, setLists] = useState();

    useEffect(() => {
        fetch('http://localhost:4000/lists')
            .then(res => res.json())
            .then(data => {
                setLists(data);
            })
    }, [])


    return (
        <>
            {
                lists &&
                lists.map((list) => (
                    <Dropdown.Item onClick={() => addToList(name, rating.average, list._id)} key={list._id}>
                        {list.name}
                    </Dropdown.Item>
                ))
            }
        </>
    )
}

export default AddToList
