import { NextResponse } from "next/server";
import TextToSpeech from "@google-cloud/text-to-speech";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "@/configs/FirebaseConfig";
const fs = require("fs");
const util = require("util");

const client = new TextToSpeech.TextToSpeechClient({
    apiKey:'AIzaSyD15Qif5veJfHF_WHKp5aq3xvVzOVfkGXA'
});

export async function POST(req){
    const {text,id} = await req.json();
    const storageRef = ref(storage,'shortifyAI/'+id+'.mp3');
    const request = {
        input: {text: text},
        // Select the language and SSML voice gender (optional)
        voice: {languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
        // select the type of audio encoding
        audioConfig: {audioEncoding: 'MP3'},
      };

       // Performs the text-to-speech request
  const [response] = await client.synthesizeSpeech(request);
 
  const audioBuffer = Buffer.from(response.audioContent,'binary');

  await uploadBytes(storageRef,audioBuffer,{contentType:'audio/mp3'})

  const downloadUrl = await getDownloadURL(storageRef);
    
  console.log(downloadUrl);
   

  return NextResponse.json({Result:downloadUrl});
}