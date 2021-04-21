import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import List from './List'

const Lists = () => {

    const [lists, setLists] = useState([]);

    const rerender = () => {
        fetch('http://localhost:4000/lists')
            .then(res => res.json())
            .then(data => {
                setLists(data);
            })
    }

    useEffect(() => {
        rerender()
    }, [])


    return (
        <div className='container mt-5'>
            <h2>Lists:</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th colSpan='3'>ListName</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lists.map((list) => (
                            <List key={list._id} name={list.name} _id={list._id} rerender={rerender}/>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Lists
