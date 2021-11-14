import React from 'react'
import './style.css'

// for data picker plugins
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';
import { useState } from 'react';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';



const InputFields = () => {

    const [dateValue, setDateValue] = useState(null)
    const classListCount = [ "I", "II", "III", "IV", "V", "V1", "V11", "V111", "IX", "X", "X11", "X12"];
    return (

        

        <div >

            <div className="text-input-field-container">
                <div className="label-class">Name</div>
                <input type="text" className="input-field" />
            </div>


            <div className="text-input-field-container">
                    <div className="label-class">DOB</div>
                    <LocalizationProvider dateAdapter={AdapterDateFns} >
                        <DesktopDatePicker 
                            value={dateValue}
                            onChange={(newValue) => {
                            setDateValue(newValue);
                            }}
                            renderInput={({ inputRef, inputProps, InputProps }) => (
                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <input ref={inputRef} {...inputProps} className="input-field-date"/>
                                {InputProps?.endAdornment}
                                </Box>
                            )}
                            />
                        </LocalizationProvider>
            </div>

            <div className="class-and-division-selectors">

                <div className="label-class">Class</div>
                    <select>
                        {classListCount.map((option) => (
                        <option value={option}>{option}</option>
                            ))}
                    </select>
                <div className="label-class">Division</div>
                    <select>
                        <option>A</option>
                        <option>B</option>
                        <option>C</option>
                    </select>
            </div>

            <div className="gender-selectors">
                <div className="label-class">Gender</div>

                <div className="radio-selectors">
                    <input type="radio" id="GenderChoice1" name="Male" value="Male" className="radio-btn"/>
                    <label for="GenderChoice1">Male</label>
                    <input type="radio" id="GenderChoice2" name="Female" value="Female" className="radio-btn"/>
                    <label for="GenderChoice2">Female</label>
                </div>

            </div>
            

            
        </div>
    )
}

export default InputFields
