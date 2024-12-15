"use client";
import React, { useState } from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { Textarea } from "@/components/ui/textarea"

  
function SelectTopic({onUserSelect}){
    const options = ['Custom Prompt', 'Random AI Story','Scary Story' , 'Historic Facts','Bed Time Story','Motivational Story', 'Fun Facts'];
    const [SelectedOption,setSelectedOption] = useState();

    return(
        <div>
             <h2 className='font-bold text-2xl text-primary'>Content</h2>
             <p className='text-gray-500'> What is the Topic of Your Video?</p>

             <Select onValueChange={(value) => {
                setSelectedOption(value)
                value !=`Custom Prompt`&&onUserSelect('topic',value);
                }
            }>
                <SelectTrigger className="w-full mt-2 p-6 text-lg">
                    <SelectValue placeholder="Content Type" />
                </SelectTrigger>
                <SelectContent>
                    {
                        options.map((item,index)=> (
                            <SelectItem value={item} key = {index}>{item}</SelectItem>
                        ))
                    }
                    
                   
                </SelectContent>
            </Select>

            {SelectedOption =='Custom Prompt' &&
                    <Textarea
                    className = 'mt-3'
                    onChange={(e)=>onUserSelect('topic',e.target.value)}
                    placeholder = "Enter Custom Prompt Here"

                    />

            }

        </div>
    )
}

export default SelectTopic;