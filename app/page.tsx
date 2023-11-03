"use client";

import Login from "@/app/components/login";
import Success from "@/app/components/success";

import { useLogin } from "@/hooks/useLogin";

export default function Home() {
  const { isSuccess, isLoading, login } = useLogin();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {isSuccess ? <Success /> : <Login isLoading={isLoading} login={login} />}
    </main>
  );
}
