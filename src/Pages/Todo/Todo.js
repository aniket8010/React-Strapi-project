import React from 'react'
import SubmitForm from './Form/SubmitForm'
import Todotable from './DataTable/Todotable'

export const Todo = () => {
    return (
        <div>
            <div className='container mt-5'>
                <div className="shadow w-50 p-4">
                    <SubmitForm />
                </div>
                <Todotable />
            </div>
        </div>
    )
}
