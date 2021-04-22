import React, { useState, useEffect } from 'react'
import { useRouteMatch, Link } from "react-router-dom";
import { getList } from '../api/api'
import Table from 'react-bootstrap/Table'
import ListShows from './ListShows'


const ListDetails = () => {

    const [list, setList] = useState()
    const match = useRouteMatch();

    const rerender = async () => {
        const list = await getList(match.params.id)
        setList(list)
    }

    useEffect(() => {
        rerender()
    }, [])

    return (
        <div className='container mt-5'>
            <h2>Listname: {list && list.name}</h2>
            <Table bordered hover variant="dark">
                <thead>
                    <tr>
                        <th className='listTitles'>Titles</th>
                        <th className='score'>Score</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {list &&
                        list.shows.map((show) => (
                            <>
                                <ListShows {...show} listId={list._id} rerender={rerender}/>
                            </>
                        ))
                    }
                </tbody>
            </Table>
            <Link to='/search'><button className='btn btn-dark'>Add a Show</button></Link>
        </div>
    )
}

export default ListDetails
