import React from 'react'
import InputFields from './InputFields'
import './style.css'

const FormConatiner = () => {
    return (
        <div className="form-data-container">
            <div className="form-container-title">Register</div>
            <InputFields/>
            <div className="submit_btn">Submit</div>
        </div>
    )
}

export default FormConatiner
