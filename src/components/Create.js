import React from 'react'

const Create = () => {

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('handled the submit');
    }

    return (
        <div className='container mt-5'>
            <h2>Give your list a name:</h2>
            <form onSubmit={submitHandler}>
                <div className='mb-3'>
                    <label htmlFor="text"></label>
                    <input className='form-control' type="text" name='text' />
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Create</button>
                </div>
            </form>

        </div>
    )
}

export default Create
