import React from 'react'
import FormConatiner from '../../Components/FormConatiner'
import TableContainer from '../../Components/TableContainer'
import './style.css'

const FormPage = () => {
    return (
        <div className="home">
            <div className="main-container">
                <TableContainer/>
                <FormConatiner/>
            </div>
        </div>
    )
}

export default FormPage
