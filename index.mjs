

import dotenv from "dotenv";
import OpenAI from "openai";
import express from "express";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

const apikey = process.env.XAI_API_KEY;
const openai = new OpenAI({
  apiKey: apikey,
  baseURL: 'https://api.x.ai/v1',
});

app.post("/v1/chat/completions", async (req, res) => {
  try {
    const { messages } = req.body; // Get messages from request body

    const response = await openai.chat.completions.create({
      model: "grok-beta",
      messages: messages,
      max_tokens: 100,
      headers: {
        Authorization: `Bearer ${apikey}`,
      },
    });

    // Send back the assistant's response
    res.json({
      reply: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});



// import dotenv from "dotenv"
// import OpenAI from "openai"
// import express from "express"
// import cors from "cors"

// dotenv.config();
// const app=express();
// app.use(express.json())
// app.use(cors())

// const apikey=process.env.XAI_API_KEY;
// const openai= new OpenAI({
//   apiKey:apikey,
//   baseURL:'https://api.x.ai/v1'
// });

// app.get("/v1/chat/completions",async(req,res)=>{
  
//     const response=await openai.chat.completions.create({
//       model:"grok-beta",
//       messages:[{
//                role:"system",content:"you are grok, helping software engineers"
//                },
//                {role:"user",content:"what is an api"}
//      ],
//      max_tokens:100
//      });
     
//      console.log(response.choices[0].message.content);
  
  

// })

// app.listen(3000);
