import React, { useState, useEffect } from 'react'
import Table from 'react-bootstrap/Table'
// import { getLists } from '../api/api'

const Lists = () => {

    const [lists, setLists] = useState([]);
    const [count, setCount] = useState(1);

    // useEffect(() => {
    //     const fetchLists = async () => {
    //         const data = await getLists();
    //         setLists(data)
    //     }
    //     fetchLists()
    // }, [])

    useEffect(() => {
        setCount(count => count + 1)
    },[])

    useEffect(() => {
        fetch('http://localhost:4000/lists')
            .then(res => res.json())
            .then(data => {
                setLists(data);
                console.log(data)
            })
    }, [])


    return (
        <div className='container mt-5'>
            <h2>Lists:</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>ListName</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                    </tr>
                    {lists && lists.length > 0 &&
                        lists.map(list => (
                            <tr key={list._id}>
                                <td>{count}</td>
                                <td>{list.name}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Lists
