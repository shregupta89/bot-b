import dotenv from "dotenv"
import OpenAI from "openai"
dotenv.config();
const apikey=process.env.XAI_API_KEY;
const openai= new OpenAI({
  apiKey:apikey,
  baseURL:'https://api.x.ai/v1'
});

async function getResponse(){
  const response=await openai.chat.completions.create({
    model:"grok-beta",
    messages:[{
             role:"system",content:"you are grok, helping software engineers"
             },
             {role:"user",content:"what is an api"}
   ],
   max_tokens:100
   });
   
   console.log(response.choices[0].message.content);

}
getResponse();





















// import express from "express";
// import cors from "cors";
// import OpenAI from "openai";
// import dotenv from "dotenv";

// dotenv.config();
// const app=express();
// app.use(express.json());

// const openai=new OpenAI({apiKey:apikey})

// app.get('/api',async(req,res)=>{
//   const response=await openai.chat.completions.create({
//     model:"gpt-4o-mini",
//     messages:[
//       {"role":"user",
//       "content":"what is api"}],
//     max_tokens:100
//   })
//   console.log(response,()=>{
//     console.log("server started")
//   })

// })


// app.listen("3000")

//////////////

// import express from 'express';
// import OpenAI from 'openai';
// import dotenv from 'dotenv';
// import cors from "cors"

// // Load environment variables from .env file
// dotenv.config();

// const app = express();
// const port = process.env.PORT || 3000;
// const apiKey = process.env.OPENAI_API_KEY;


// if (!apiKey) {
//   throw new Error("The OPENAI_API_KEY environment variable is missing or empty.");
// }

// const openai = new OpenAI({ apiKey });
// app.use(cors());
// app.use(express.json());

// app.post('/chat', async (req, res) => {
//   const { messages } = req.body;

//   try {
//     const response = await openai.chat.completions.create({
//       model: "gpt-4",
//       messages: messages, // Array of message objects: [{ role: "user", content: "Hello!" }]
//     });

//     res.json({
//       reply: response.choices[0].message.content,
//     });
//   } catch (error) {
//     console.error(error.response?.data || error.message);
//     res.status(500).json({ error: "Failed to fetch a response." });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

