import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Shows from './Shows';

const Search = () => {

    const { register, handleSubmit } = useForm();

    const [shows, setShows] = useState([]);

    // API-CALL: FETCHED SHOWS AUS DER TV-MAZE API NACH VORGEGEBENEN QUERY STRING
    useEffect(() => {
        fetch('https://api.tvmaze.com/search/shows?q=it')
            .then(res => res.json())
            .then(data => {
                setShows(data);
            })
    }, [])

    // API-CALL: FETCHED SHOWS AUS DER TV-MAZE API NACH EINGEGEBENEN QUERY STRING
    const submitHandler = async (data) => {
        fetch(`https://api.tvmaze.com/search/shows?q=${data.text}`)
            .then(res => res.json())
            .then(data => {
                setShows(data);
                console.log(data)
            })
    }

    return (
        // SUCHFELD & SHOWS CONTAINER
        <div className='container mt-5'>
            <h2>Type in your search term:</h2>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className='mb-3'>
                    <label htmlFor="text"></label>
                    <input {...register('text')}
                        className='form-control' type="text"
                        name='text' placeholder='Food...' />
                </div>
                <div>
                    <button type='submit' className='btn btn-dark'>Search</button>
                </div>
            </form>
            <div className='showContainer d-flex mt-5'>
                {shows.length > 0 &&
                    shows.map((show) =>
                        <Shows {...show} key={show.show.id} />
                    )
                }
            </div>
        </div>
    )
}

export default Search
