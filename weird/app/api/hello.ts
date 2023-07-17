import openai from "@/utils/openai";
import type { NextApiRequest,NextApiResponse } from "next";
type Data = {
    name:string
}
export default async function handler (
    req:NextApiRequest,
    res:NextApiResponse<any>
) {
    const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
            role:'user',
            content:'Can you explain what frontforumfocus is?'
            },

        ],
    });
    const responseText = completion.data.choices[0].message?.content;


  return  res.status(200).json({responseText});
}
