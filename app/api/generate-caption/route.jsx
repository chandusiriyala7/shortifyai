import { AssemblyAI } from 'assemblyai';
import { NextResponse } from 'next/server';

export async function POST(req){

    try{

    const {audioFileUrl} = await req.json()
    const client = new AssemblyAI({
        apiKey: 'e41b4e1e548040e6b68582de19222524',
    });

 

  
    const FILE_URL = audioFileUrl;
  
    // You can also transcribe a local file by passing in a file path
    // const FILE_URL = './path/to/file.mp3';
    
    // Request parameters 
    const data = {
        audio: FILE_URL
    }
  
    const transcript = await client.transcripts.transcribe(data);
    return NextResponse.json({'result' : transcript.words})
    }
    catch(e){
        return NextResponse.json({'caption error' : e})
    }
}