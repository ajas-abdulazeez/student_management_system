import React from 'react'
import './style.css'
import TableHeader from './TableHeader'
import TableRowData from './TableRowData'
import {useState} from 'react'

const TableData = () => {


// dummy values for checking the data 
    const [RowData ,setRowData] = useState(
        [
            {
            AdmissionNo:"102",
            Name:"Ajas",
            Dob:"13/07/1998",
            Class:"II",
            Divison:"C",
            Gender:"M" },
            {
            AdmissionNo:"104",
            Name:"Asha",
            Dob:"26/09/1997",
            Class:"I",
            Divison:"A",
            Gender:"F" },
            {
            AdmissionNo:"104",
            Name:"Asha",
            Dob:"26/09/1997",
            Class:"I",
            Divison:"A",
            Gender:"F" },
       
    ])

    


    return (
        <div>
            
            <TableHeader/>
            <div className="table-header-seperating-line"></div>
           
           {RowData.map((item ,i)=> <TableRowData  data={item} key={i}/> )}

        </div>
    )
}

export default TableData
