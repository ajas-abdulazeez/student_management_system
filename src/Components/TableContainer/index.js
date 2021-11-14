import React from 'react'
import TableData from '../TableData'
import './style.css'

const TableContainer = () => {
    return (
        <div className="table-container-section">
           <div className="table-container-title">Student List</div>
           <TableData/>
        </div>
    )
}

export default TableContainer
