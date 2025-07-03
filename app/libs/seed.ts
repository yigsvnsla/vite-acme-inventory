import { $, Seed, users, type SeedConfig } from "@better-auth-kit/seed";

export const config: SeedConfig = {
    deleteRowsBeforeSeeding: {
        enabled: true,
        models: ["user", "session", "account"],
    },
    rows: 100,
};

export const seed = Seed({
    // Adds 100 users (including sessions and accounts)
    ...users({
        account:{
            password: $.password(()=> "password123456"),
        }
    }),
});
