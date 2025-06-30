import { Type, type Static } from "@sinclair/typebox"

export const signInSchema = Type.Object({
  email: Type.String({}),
  password: Type.String({
    minLength: 8,
  }),
})

export type SignInSchema = Static<typeof signInSchema>