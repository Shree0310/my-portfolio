import { NextRequest, NextResponse } from 'next/server';
import Anthropic from '@anthropic-ai/sdk';

// Initialize Anthropic client
const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY || '',
});

export async function POST(req: NextRequest) {
    try {
        const { message } = await req.json();

        // Validate the message
        if (!message || typeof message !== 'string') {
            return NextResponse.json(
                { error: 'Invalid message' },
                { status: 400 }
            );
        }

        // Call Claude API
        const response = await anthropic.messages.create({
            model: 'claude-sonnet-4-20250514',
            max_tokens: 100,
            messages: [
                {
                    role: 'user',
                    content: message,
                },
            ],
        });

        // Extract the text response
        const aiResponse = response.content[0].type === 'text' 
            ? response.content[0].text 
            : 'Sorry, I could not generate a response.';

        return NextResponse.json({ response: aiResponse });

    } catch (error) {
        console.error('API Error:', error);
        return NextResponse.json(
            { error: 'Failed to get AI response' },
            { status: 500 }
        );
    }
}