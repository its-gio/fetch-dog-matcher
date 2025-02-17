"use client";

import React, { useActionState } from "react";
import { login } from "@/components/login/actions";

const LoginForm = () => {
  const [state, action, isPending] = useActionState(login, null);
  console.log({ state });

  return (
    <form action={action}>
      <input type="text" name="name" />
      <input type="email" name="email" />
      <button disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
