import type { Route } from "../sign-in/+types";
import { typeboxResolver } from "@hookform/resolvers/typebox";
import { signInSchema, type SignInSchema } from "~/schemas/sign-in.schema";
import { getValidatedFormData } from "remix-hook-form";
import { SignUpForm } from "~/components/sign-up-form";

export const action = async ({ request }: Route.ActionArgs) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<SignInSchema>(
    request,
    typeboxResolver(signInSchema)
  );
  if (errors) return ({ errors, defaultValues })
  return data;
};

export default function SignUpPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-5xl">
        <SignUpForm />
      </div>
    </div>
  );
}
