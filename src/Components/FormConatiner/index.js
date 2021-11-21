import React from 'react'

import './style.css'

// for data picker plugins
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { useState } from 'react';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';


const FormConatiner = () => {

    const classListCount = [ "I", "II", "III", "IV", "V", "V1", "V11", "V111", "IX", "X", "X11", "X12"];


    // for data assigning 
    const [Name,setName ]=useState("");
    const [doB, setDoB ] = useState(new Date());
    const [admissionNumber, setAdmissionNumber ] =useState("");
    const parse_date = Date.parse(doB)
    let date = new Date(parse_date);
    const final_date = date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();

    const [studentClass, setStudentClass] =useState("");
    const [divison, setDivision] =useState("");
    const [gender, setgender ] =useState("");


    


    // for adding new data - function call
    const ValidateData  = ()=>{
        
        //validation part
        var error ="";
        var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]+/;
        if(!Name || !final_date || !studentClass ||!divison || !gender){
            error = "Please fill all the fields ";
            console.log(error) 
          }
        else if(format.test(Name)){
            error = "Name should contain letters or space only ";
            console.log(error)
            return 
          }
        else{
            console.log("You have registered successfully!!!");
            setAdmissionNumber("here the admission number is fetched from the database and add 1 to it")
            const submitData= ({
                Name:Name,
                admissionNumber:"101",
                dob:final_date,
                studentClass:studentClass,
                divison:divison,
                gender:gender
           })
            console.log(admissionNumber)
            console.log(submitData)
        }

    }
    
    return (

       
	<div className="form-data-container">
        
		<div className="form-container-title">Register</div>
            <div className="text-input-field-container">
                <div className="label-class">Name</div>
                <input type="text" className="input-field" value={Name} onChange={(e)=>{setName(e.target.value)}}/>
            </div>


            <div className="text-input-field-container">
                    <div className="label-class">DOB</div>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                        <DesktopDatePicker 
                            value={doB}
                            onChange={(newValue) => {
                            setDoB(newValue);
                            }}
                            renderInput={({ inputRef, inputProps, InputProps }) => (
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <input ref={inputRef} {...inputProps} className="input-field-date" onChange={(e)=>{setDoB(e.target.value)}}/>
                                {InputProps?.endAdornment}
                                </Box>
                            )}
                            />
                        </LocalizationProvider>
            </div>

            <div className="class-and-division-selectors">

                <div className="label-class">Class</div>
                    <select 
                    value={studentClass} onChange={(e)=>{setStudentClass(e.target.value)}}>

                        <option value="">Select</option>

                        {classListCount.map((option) => (
                        <option value={option} {...option} > {option} </option>
                            ))}
                    </select>
                <div className="label-class">Division</div>
                    <select
                        value={divison} onChange={(e)=>{setDivision(e.target.value)}}>

                        <option value="">Select</option>
                        <option value="A" onChange={(e)=>{setDivision(e.target.value)}}>A</option>
                        <option value="B" onChange={(e)=>{setDivision(e.target.value)}}>B</option>
                        <option value="C" onChange={(e)=>{setDivision(e.target.value)}}>C</option>
                    </select>
            </div>

            <div className="gender-selectors">
                <div className="label-class">Gender</div>

                <div className="radio-selectors">
                    <input type="radio" id="GenderChoice1" name="Male" value="M" className="radio-btn"
                     onChange={(e)=>{setgender(e.target.value)}}/>
                    <label for="GenderChoice1">Male</label>
                    <input type="radio" id="GenderChoice2" name="Female" value="F" className="radio-btn"
                     onChange={(e)=>{setgender(e.target.value)}}/>
                    <label for="GenderChoice2">Female</label>
                </div>

            </div>
            <div className="submit_btn" onClick={ValidateData}>Submit</div>
        </div>
    )
}

   
export default FormConatiner
