/**
 * ChatBot API Service
 * 
 * This service handles communication with the backend AI chatbot API.
 * 
 * Backend Endpoint Expected:
 * POST /api/chatbot
 * 
 * Request Body:
 * {
 *   message: string,
 *   conversationHistory: Array<{role: 'user' | 'assistant', content: string}>
 * }
 * 
 * Response:
 * {
 *   message: string  // AI response
 * }
 * 
 * To integrate with AI services:
 * 1. OpenAI: Use OpenAI API with gpt-3.5-turbo or gpt-4
 * 2. Anthropic: Use Claude API
 * 3. Custom: Implement your own AI service
 * 
 * Example backend implementation (Node.js/Express):
 * 
 * app.post('/api/chatbot', async (req, res) => {
 *   const { message, conversationHistory } = req.body;
 *   
 *   // Example with OpenAI
 *   const response = await openai.chat.completions.create({
 *     model: "gpt-3.5-turbo",
 *     messages: [
 *       { role: "system", content: "You are a helpful assistant for Solvey Labs..." },
 *       ...conversationHistory,
 *       { role: "user", content: message }
 *     ]
 *   });
 *   
 *   res.json({ message: response.choices[0].message.content });
 * });
 */

import Http from './Http';

export const sendChatMessage = async (message, conversationHistory = []) => {
  try {
    const response = await Http.post('/api/chatbot', {
      message,
      conversationHistory
    });
    return response.data;
  } catch (error) {
    console.error('ChatBot API Error:', error);
    throw error;
  }
};

export default {
  sendChatMessage
};



