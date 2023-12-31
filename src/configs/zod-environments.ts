import { z } from "zod";

const envVariables = z.object({
    PORT: z.string().default("3000"),
    API_URL: z.string(),
});

envVariables.parse(process.env);

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        // eslint-disable-next-line @typescript-eslint/no-empty-interface
        interface ProcessEnv extends z.infer<typeof envVariables> {}
    }
}
