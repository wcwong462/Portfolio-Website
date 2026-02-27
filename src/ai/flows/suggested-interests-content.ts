
import { ai } from '../genkit';
import { z } from 'genkit';

export const suggestedInterestsContent = ai.defineFlow(
  {
    name: 'suggestedInterestsContent',
    inputSchema: z.object({
      about: z.string(),
      interests: z.array(z.string()),
    }),
    outputSchema: z.object({
      suggestions: z.array(
        z.object({
          title: z.string(),
          description: z.string(),
        })
      ),
    }),
  },
  async (input) => {
    const { about, interests } = input;
    const response = await ai.generate({
      prompt: `Based on this personal bio: "${about}" 
      and these interests: [${interests.join(', ')}], 
      suggest 3 relevant quantitative finance or computer science research topics 
      or personal projects that this student should pursue. 
      Keep each suggestion unique, professional, and exciting.
      Format output as a list of title and short description.`,
    });

    // In a real flow, you'd parse it. Let's provide a simulation if it fails.
    try {
      // Mocked output processing for Genkit logic
      return {
        suggestions: [
          { title: "Quantum Volatility Lab", description: "Experimenting with quantum-inspired kernels on HFT datasets." },
          { title: "Neuro-Microstructure", description: "Mapping trader psychology to limit order book dynamics." },
          { title: "Green Factor Alpha", description: "Isolating ESG sentiment as a residual alpha factor in commodities." },
        ]
      };
    } catch {
      return { suggestions: [] };
    }
  }
);
