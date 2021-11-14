import React from 'react'

const TableRowData = ({data}) => {

    

    return (
        <div className="tabe-rows">
                <div className="table-row-data"> {data.AdmissionNo}</div>
                <div className="table-row-data"> {data.Name}</div>
                <div className="table-row-data"> {data.Dob}</div>
                <div className="table-row-data"> {data.Class}</div>
                <div className="table-row-data"> {data.Divison}</div>
                <div className="table-row-data"> {data.Gender}</div>
            </div>
    )
}

export default TableRowData
