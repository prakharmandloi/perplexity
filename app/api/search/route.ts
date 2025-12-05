import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json();

    if (!query) {
      return NextResponse.json(
        { error: 'Query is required' },
        { status: 400 }
      );
    }

    // Use Google Gemini API with provided key or environment variable
    const googleApiKey = process.env.GOOGLE_API_KEY || 'AIzaSyDfMTLVWl61nwv2bK3Dj6GFbaY8jW-n9zA';
    
    // Make request to Google Gemini API with correct model name
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${googleApiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `You are a helpful AI assistant similar to Perplexity AI. Provide comprehensive, well-researched answers with relevant context. Format your responses in markdown for better readability.\n\nQuestion: ${query}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 2048,
          }
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('Google API error:', errorData);
      throw new Error(`Google API error: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    
    // Extract the generated text from Gemini response
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response generated';
    
    return NextResponse.json({
      answer: generatedText,
      sources: ['Powered by Google Gemini 1.5 Flash'],
    });

  } catch (error) {
    console.error('Search API Error:', error);
    return NextResponse.json(
      { 
        answer: `I encountered an error processing your request.\n\n**Error:** ${error instanceof Error ? error.message : 'Unknown error'}\n\nPlease make sure:\n- Your Google API key is valid\n- The Gemini API is enabled in your Google Cloud project\n- You have sufficient quota\n\nTry enabling the API at: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com`,
        sources: []
      },
      { status: 200 }
    );
  }
}
