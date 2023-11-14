"use client";

import Login from "@/app/components/login";
import Success from "@/app/components/success";
import Logo from "@/public/assets/logo.svg";
import { Tabs, Typography } from "@/ui";

import { useLogin } from "@/hooks/useLogin";

export default function Home() {
  const { isSuccess, isLoading, login } = useLogin();

  return (
    <main className="min-h-screen p-24 mbl:p-8">
      {/* <Logo/> */}
      {/* {isSuccess ? <Success /> : <Login isLoading={isLoading} login={login} />} */}
      <div>
        <Typography
          variant="h1"
          fontWeight="bold"
          align="center"
          customClassName=""
        >
          Black Sis in STEM&apos;s Career Coach
        </Typography>
      </div>

      {isSuccess ? (
        <Success />
      ) : (
        <Tabs
          tabs={[
            {
              title: "Sign In",
              children: <section className="flex justify-center items-center mt-4"><Login isLoading={isLoading} login={login} /></section>,
            },
            { title: "Sign Up", children: <section className="flex justify-center items-center mt-4">This is tab 2</section> },
          ]}
        />
      )}
    </main>
  );
}
