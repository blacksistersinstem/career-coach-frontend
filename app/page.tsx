"use client";

import Login from "@/app/components/login";
import SignUp from "./components/sign-up";
import Success from "@/app/components/success";
import { Tabs, Typography } from "@/ui";
import { useLogin } from "@/hooks/useLogin";
import { useSignUp } from "@/hooks/useSignUp";

export default function Home() {
  const { loginSuccess, isLoading, login } = useLogin();
  const { signUpSuccess, signUpLoading, signUp } = useSignUp();

  return (
    <main className="min-h-screen p-24 mbl:p-8">
      <div>
        <Typography
          variant="h1"
          fontWeight="bold"
          align="center"
          customClassName="mb-4"
        >
          Black Sis in STEM&apos;s Career Coach
        </Typography>
      </div>

      {loginSuccess || signUpSuccess ? (
        <Success />
      ) : (
        <Tabs
          tabs={[
            {
              title: "Sign In",
              children: (
                <section className="flex justify-center items-center mt-4">
                  <Login isLoading={isLoading} login={login} />
                </section>
              ),
            },
            {
              title: "Sign Up",
              children: (
                <section className="flex justify-center items-center mt-4">
                  <SignUp signUpLoading={signUpLoading} signUp={signUp} />
                </section>
              ),
            },
          ]}
        />
      )}
    </main>
  );
}
