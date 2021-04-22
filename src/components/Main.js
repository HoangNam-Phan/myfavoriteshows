import React from 'react'
import { Link } from 'react-router-dom'

const main = () => {
    return (
        // LANDINGPAGE
        <div className="container d-flex flex-column align-items-center justify-content-center">
            <h1 className='mb-3'>Welcome To MyFavoriteShows</h1>
            <h3 className='mb-3'>Get started</h3>
            <Link to='/create'>
                <button className='btn btn-dark'>Create a new List</button>
            </Link>
        </div>
    )
}

export default main
