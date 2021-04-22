import React, { useState, useEffect } from 'react'
import { useRouteMatch } from "react-router-dom";
import { getList } from '../api/api'
import Table from 'react-bootstrap/Table'
import { RiDeleteBin5Fill } from 'react-icons/ri';

const ListDetails = () => {

    const [list, setList] = useState()
    const match = useRouteMatch();

    useEffect(() => {
        const fetchList = async () => {
            const list = await getList(match.params.id)
            setList(list)
        }
        fetchList()
    }, [match.params.id])

    return (
        <div className='container mt-5'>
            <h2>Listname: {list && list.name}</h2>
            <Table bordered hover>
                <thead>
                    <tr>
                        <th className='listTitles'>Titles</th>
                        <th>Score</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {list &&
                        list.shows.map((show) => (
                            <>
                                <tr>
                                    <td>{show.name}</td>
                                    <td>{show.rating === null ? 'N/A' : show.rating}</td>
                                    <td className='bin'><span className='p-2'><RiDeleteBin5Fill /></span> </td>
                                </tr>
                            </>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ListDetails
