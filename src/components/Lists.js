import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
import List from './List'
import { getLists } from '../api/api'

const Lists = () => {

    const [lists, setLists] = useState([]);

    // API-CALL: FETCH ALLER LISTEN
    const rerender = async () => {
        await getLists()
        .then(data => setLists(data));
    }

    useEffect(() => {
        rerender()
    }, [])


    return (
        // GIBT TABELLE MIT LISTENNAMEN UND BUTTONS WIEDER
        <div className='container mt-5'>
            <h2>Lists:</h2>
            <Table bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        lists.map((list) => (
                            <List key={list._id} name={list.name} _id={list._id} rerender={rerender} />
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Lists
