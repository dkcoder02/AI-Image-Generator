import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from 'openai';

const openai = new OpenAI({
  baseURL: 'https://api.studio.nebius.com/v1/',
  apiKey: process.env.OPENAI_API_KEY,
});


const openaiTwo = new OpenAI({
  baseURL: 'https://api.studio.nebius.com/v1/',
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { prompt, size = '1024x1024' } = await req.json();

    console.log("prompt", prompt);
    if (!prompt) {
      return NextResponse.json(
        { error: 'Prompt is required' },
        { status: 400 }
      );
    }

    const response = await openai.images.generate({
      model: "black-forest-labs/flux-dev",
      response_format: "url",
      size: size as "1024x1024" | "1792x1024" | "1024x1792",
      n: 1,
      extra_body: {
        response_extension: "webp",
        width: 1024,
        height: 1024,
        num_inference_steps: 28,
        negative_prompt: "",
        seed: -1
      },
      prompt: prompt
    })

    return NextResponse.json({ imageUrl: response.data[0].url });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to generate image' },
      { status: 500 }
    );
  }
}