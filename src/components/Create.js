import React from 'react'
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom'
import { createList } from '../api/api'

const Create = () => {

    const { register, handleSubmit } = useForm();
    const history = useHistory();

    // API-CALL LISTE ERSTELLEN UND REDIRECT
    const submitHandler = async (data) => {
        await createList(data)
        history.push('/lists')
        alert('The list has been created. You might have to refresh the page to see the change.')
    }

    return (
        // FORM UM LISTE ZU ERSTELLEN
        <div className='container mt-5'>
            <h2>Give your list a name:</h2>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div className='mb-3'>
                    <label htmlFor="name"></label>
                    <input {...register('name')}
                        className='form-control' type="text"
                        name='name' placeholder='Name...' />
                </div>
                <div>
                    <button type='submit' className='btn btn-dark'>Create</button>
                </div>
            </form>

        </div>
    )
}

export default Create
