import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import Shows from './Shows';

const Search = () => {

    const { register, handleSubmit } = useForm();

    const [shows, setShows] = useState([]);

    useEffect(() => {
        fetch('http://api.tvmaze.com/search/shows?q=it')
            .then(res => res.json())
            .then(data => {
                setShows(data);
            })
    }, [])

    const submitHandler = async (data) => {
        fetch(`http://api.tvmaze.com/search/shows?q=${data.text}`)
            .then(res => res.json())
            .then(data => {
                setShows(data);
            })
    }

    return (
        <div className='container mt-5'>
            <h2>Type in a series name or search term you want to look for:</h2>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className='mb-3'>
                    <label htmlFor="text"></label>
                    <input {...register('text')}
                        className='form-control' type="text"
                        name='text' placeholder='Food...' />
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Search</button>
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
