import { defineCollection, z } from 'astro:content';

const events = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    image: z.string(),
    status: z.enum(['upcoming', 'ongoing', 'past']),
    location: z.string().optional(),
    time: z.string().optional(),
    registrationUrl: z.string().optional(),
    featured: z.boolean().default(false),
    donation: z.object({
      enabled: z.boolean().default(false),
      title: z.string().optional(),
      description: z.string().optional(),
    }).optional(),
    showPartners: z.boolean().default(false),
  })
});

export const collections = {
  events
}; 