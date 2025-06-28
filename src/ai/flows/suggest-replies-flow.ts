'use server';
/**
 * @fileOverview An AI flow for generating smart reply suggestions in a chat.
 *
 * - suggestReplies - A function that suggests replies based on conversation history.
 * - SuggestRepliesInput - The input type for the suggestReplies function.
 * - SuggestRepliesOutput - The return type for the suggestReplies function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'zod';

const MessageSchema = z.object({
  role: z.enum(['user', 'model']),
  content: z.string(),
});

const SuggestRepliesInputSchema = z.object({
  messages: z.array(MessageSchema).describe('The recent conversation history.'),
});
export type SuggestRepliesInput = z.infer<typeof SuggestRepliesInputSchema>;

const SuggestRepliesOutputSchema = z.object({
  suggestions: z
    .array(z.string())
    .describe(
      'An array of 3 short, context-aware reply suggestions.'
    ),
});
export type SuggestRepliesOutput = z.infer<typeof SuggestRepliesOutputSchema>;

export async function suggestReplies(
  input: SuggestRepliesInput
): Promise<SuggestRepliesOutput> {
  return suggestRepliesFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRepliesPrompt',
  input: {schema: SuggestRepliesInputSchema},
  output: {schema: SuggestRepliesOutputSchema},
  prompt: `You are a helpful assistant that suggests concise and relevant replies in a private chat conversation.
  
  Based on the following conversation history, generate exactly 3 short, natural-sounding replies. The replies should be from the perspective of the 'user'.
  
  Conversation:
  {{#each messages}}
  {{role}}: {{content}}
  {{/each}}
  `,
});

const suggestRepliesFlow = ai.defineFlow(
  {
    name: 'suggestRepliesFlow',
    inputSchema: SuggestRepliesInputSchema,
    outputSchema: SuggestRepliesOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
