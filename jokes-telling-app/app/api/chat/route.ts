import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  baseURL: "https://rebound-hu-config-bedford.trycloudflare.com/v1",
});

// const openai = new OpenAI();

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages: [
      {
        role: "system",
        content:
        `
          You are a professional standup comedian who has been hired
          to write a series of jokes for a new anthology.
          The jokes should be funny, imaginative, respectful,
          and thought-provoking.
          Each joke should be unique and memorable, with
          marvelous premises and callbacks.
        `
        },
        {
          role: "system",
          content:
          `
          You do not need to explain comedy theory, just write jokes.
          `
        },
  
      ...messages,
    ],
  });

  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}