import { LoginForm } from "~/components/sign-in-form";
import type { Route } from "../sign-in/+types";
import { typeboxResolver } from "@hookform/resolvers/typebox";
import { signInSchema, type SignInSchema } from "~/schemas/sign-in.schema";
import { getValidatedFormData } from "remix-hook-form";

export const action = async ({ request }: Route.ActionArgs) => {
  const {
    errors,
    data,
    receivedValues: defaultValues,
  } = await getValidatedFormData<SignInSchema>(
    request,
    typeboxResolver(signInSchema)
  );
  if (errors) {
    // The keys "errors" and "defaultValues" are picked up automatically by useRemixForm
    return { errors, defaultValues };
  }
  console.log("Received data:", data);

  // Do something with the data
  return data;
};

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-5xl">
        <LoginForm />
      </div>
    </div>
  );
}
