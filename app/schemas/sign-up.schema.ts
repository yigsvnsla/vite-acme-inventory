import { Type, type Static } from "@sinclair/typebox"

export const signUpSchema = Type.Object({
  email: Type.String({}),
  password: Type.String({
    minLength: 8,
  }),
  name: Type.String({
    minLength: 2,
    maxLength: 50,
  }),
})

export type SignUpSchema = Static<typeof signUpSchema>