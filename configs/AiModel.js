const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI('AIzaSyDCFVJgUGqNzegRfKwnOFeb9wWDrk_2ItE');
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash-exp",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
 
  export  const chatSession = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {text: "Write a Script to generate 30 seconds video on topic : Interesting historical story along with AI Image prompt in realistic format for each scene and give me result  in JSON format with image Prompt  and contextText as field. in JSON imagePrompt and ContextText should only be there\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"imagePrompt\": \"A bustling marketplace in ancient Rome, filled with vendors selling goods, people in togas haggling, and Roman soldiers walking through, all bathed in warm sunlight. Realistic style, 8K resolution.\",\n    \"contextText\": \"Our story begins in the heart of ancient Rome, where life moved at a vibrant pace.\"\n  },\n  {\n     \"imagePrompt\": \"A close-up of a Roman merchant's hand holding a clay tablet with cuneiform writing on it. Focus on the detail of the cracked clay and the worn texture. Realistic, detailed, 8K resolution.\",\n    \"contextText\": \"Merchants traded not just goods, but stories and news on clay tablets.\"\n  },\n    {\n    \"imagePrompt\": \"A Roman Senator, looking concerned, reading a message on a clay tablet by candlelight in a dimly lit room. Realistic, dramatic lighting, 8K resolution.\",\n     \"contextText\": \"One such tablet brought word of an unexpected conspiracy, threatening the very foundations of Rome.\"\n  },\n  {\n    \"imagePrompt\": \"A clandestine meeting in a hidden underground chamber, with several figures in dark cloaks whispering and plotting around a table lit by a single torch. Realistic, moody lighting, 8K resolution.\",\n     \"contextText\": \"A group of senators secretly plotted to overthrow the emperor, their plans shrouded in secrecy.\"\n  },\n    {\n    \"imagePrompt\":\"A tense scene of Roman soldiers marching through the streets at night, their torches casting long shadows, on high alert. Realistic, slightly grainy, 8K resolution.\",\n     \"contextText\":\"The emperor's guards, tipped off by a loyal citizen, were on high alert, searching for the conspirators.\"\n  },\n  {\n     \"imagePrompt\": \"A dramatic standoff in the Roman Forum, with the conspirators surrounded by the emperor's soldiers. Dust and tension fill the air. Realistic, action-oriented, 8K resolution.\",\n    \"contextText\":\"The confrontation took place in the Roman Forum, and the fate of Rome hung in the balance.\"\n  },\n   {\n     \"imagePrompt\":\"A wide shot of the Roman Forum, the aftermath of the standoff. People are seen walking, stunned, while the Roman guards hold the remaining conspirators . Realistic, 8K resolution, Slightly hazy.\",\n     \"contextText\":\"The conspiracy was thwarted, but the events of that day left their mark on the great city.\"\n   }\n]\n```\n"},
          ],
        },
      ],
    });
  
 