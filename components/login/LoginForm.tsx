"use client";

import React, { useActionState } from "react";
import { login } from "@/components/login/actions";

const LoginForm = () => {
  const [state, action, isPending] = useActionState(login, null);
  console.log({ state });

  return (
    <div className="flex absolute z-20 bg-slate-600/80 w-screen h-screen items-center justify-center">
      <form
        action={action}
        className="flex flex-col gap-5  p-10 rounded-md bg-zinc-100 text-center"
      >
        <h3 className="text-3xl">Login</h3>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className="p-1 rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="p-1 rounded-md"
        />
        <button disabled={isPending} className="invert-bg rounded-sm">
          {isPending ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
