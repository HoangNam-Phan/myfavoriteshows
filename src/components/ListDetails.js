import React, { useState, useEffect } from 'react'
import { useRouteMatch } from "react-router-dom";
import { getList } from '../api/api'
import Table from 'react-bootstrap/Table'

const ListDetails = () => {

    const [ list, setList ] = useState()
    const match = useRouteMatch();

    useEffect(() => {
        const fetchList = async () => {
            const list = await getList(match.params.id)
            setList(list)
        }
        fetchList()
    }, [])

    return (
        <div className='container mt-5'>
            <h2>Listname: {list && list.name}</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th colSpan='3'>Titles</th>
                    </tr>
                </thead>
                <tbody> 
                    {/* { list &&
                        list.series.map((series) => (
                            <tr>hi im {series.name}</tr>
                        ))
                    } */}
                </tbody>
            </Table>
        </div>
    )
}

export default ListDetails
