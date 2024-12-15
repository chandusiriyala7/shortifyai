
"use client";
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

function SelectDuration({onUserSelect}){
    const options = ['15Sec', '30Sec','60Sec'];
    const [SelectedOption,setSelectedOption] = useState();

    return(
        <div>
             <h2 className='font-bold text-2xl text-primary mt-7'>Duration</h2>
             <p className='text-gray-500'> Select Duration of the Video?</p>

             <Select onValueChange={(value) => {
                setSelectedOption(value);
                value !=``&&onUserSelect('duration',value);
             }
            }>
                <SelectTrigger className="w-full mt-2 p-6 text-lg">
                    <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                    {
                        options.map((item,index)=> (
                            <SelectItem value={item} key = {index}>{item}</SelectItem>
                        ))
                    }
                    
                   
                </SelectContent>
            </Select>

        </div>
    )
}

export default SelectDuration;