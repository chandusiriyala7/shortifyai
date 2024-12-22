 
'use client'
import React, { useState, useEffect } from 'react'
import SelectTopic from '../_components/SelectTopic';
import SelectStyle from '../_components/SelectStyle';
import SelectDuration from '../_components/SelectDuration';
import { Button } from '@/components/ui/button';
import axios from 'axios';
import CustomLoading from '../_components/CustomLoading';
import { v4 as uuid } from 'uuid';

function CreateNew(){

    const [formData, setFormData] = useState({});
    const [loading, setLoading] = useState(false);
    const [videoScript, setVideoScript] = useState([]);
    const [audioFileUrl, setAudioFileUrl] = useState(null);
    const [captions, setCaptions] = useState();
    const [error, setError] = useState(null);

    const onHandleInputChange = (fieldName, fieldValue) => {
        setFormData(prev => ({ ...prev, [fieldName]: fieldValue }));
    }

    const onCreateClickHandler = async () => {
        try {
            await GetVideoScript();
        } catch (error) {
            setError(error.message);
        }
    }

    const GetVideoScript = async () => {
        setLoading(true);
        const prompt = `Write a Script to generate ${formData.duration} video on topic : Interesting ${formData.topic} story along with AI Image prompt in ${formData.imageStyle} format for each scene and give me result  in JSON format with image Prompt  and contextText as field. in JSON imagePrompt and ContextText should only be there\n`;
        try {
            const result = await axios.post('/api/get-video-script', { prompt });
            setVideoScript(result.data.result);
            GenerateAudioFile(result.data.result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }

    const GenerateAudioFile = async (videoScriptData) => {
        let script = '';
        const id = uuid();
        videoScriptData.forEach(item => {
            script += item.contextText + ' ';
        });
        try {
            const result = await axios.post('/api/generate-audio', { text: script, id });
            setAudioFileUrl(result.data.Result);
            GenerateAudioCaption(result.data.Result);
            console.log(result.data.Result);
        } catch (error) {
            setError(error.message);
        }
    }

    const GenerateAudioCaption  = async(fileUrl) => {
        setLoading(true);

        await axios.post('/api/generate-caption',{ audioFileUrl : fileUrl })
        .then(resp =>{
            console.log(resp.data.result);
            setCaptions(resp.data.result);
        })

        setLoading(false);
    }
    useEffect(() => {
        if (error) {
            console.error(error);
        }
    }, [error]);

     
    return(
        <div className='md:px-20'>
            <h2 className='font-bold text-4xl text-primary text-center'>Create New</h2>

            <div className='mt-10 shadow-md p-10'>
                {/* Select any Topic */}
                    <SelectTopic onUserSelect={onHandleInputChange}/>
                {/* Select any Style */} 
                    <SelectStyle onUserSelect={onHandleInputChange}/>
                {/* Duration */} 
                    <SelectDuration onUserSelect={onHandleInputChange}/>
                {/* Create Button */}
                <Button className='mt-10 w-full' onClick = {onCreateClickHandler}>Create Short Video</Button>
            </div>
            <CustomLoading loading = {loading}/>
        </div>
    )
}

export default CreateNew;