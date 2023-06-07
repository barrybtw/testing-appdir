import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  clientPrefix: 'NEXT_PUBLIC_',
  server: {
    DATABASE_URL: z.string().url(),
    DISCORD_CLIENTID: z.string().min(1),
    DISCORD_CLIENTSECRET: z.string().min(1),
    NEXTAUTH_SECRET: z.string().min(1),
    NEXTAUTH_URL: z.string().url(),
  },
  client: {},
  runtimeEnv: process.env,
});
