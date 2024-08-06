"use client";
import { useFormState, useFormStatus } from "react-dom";
import { login_handler as login } from "@/actions/admin/authentication";
import Link from "next/link";
import ThemeSwitch from "@/components/themes/ThemeSwitch";

const LoginForm = () => {
  const [formState, login_handler] = useFormState(login, {});
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <Link
        href="/"
        className="absolute top-2 left-2 underline underline-offset-2 text-xs text-blue-500 hover:text-blue-700 font-primary"
      >
        &lt; Homepage
      </Link>
      <div className="absolute top-2 right-2">
        <ThemeSwitch />
      </div>
      {formState.error && (
        <div className="flex justify-center items-center w-2/3 md:w-1/3  border-2 border-red-500 bg-red-100 shadow-md text-neutral-700 rounded-lg font-primary font-medium p-4 dark:bg-red-300 ">
          <p>{formState.msg}</p>
        </div>
      )}
      <form action={login_handler} className="flex flex-col gap-6">
        <div className="flex flex-col w-full gap-4 justify-between">
          <div className="flex flex-col gap-1 w-full">
            <input
              type="email"
              className="input "
              placeholder="Email"
              name="email"
            />
            {formState.email && (
              <p className="text-sm font-primary ml-1 font-medium  text-red-400">
                {formState.email}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-1 w-full">
            <input
              type="password"
              className="input "
              placeholder="Password"
              name="password"
            />
            {formState.password && (
              <p className="text-sm font-primary ml-1 font-medium  text-red-400">
                {formState.password}
              </p>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-evenly items-center">
          <LoginButton />
          <button
            type="button"
            className="underline underline-offset-2 text-xs text-blue-500 hover:text-blue-700 font-primary"
          >
            Forgot password ?
          </button>
        </div>
      </form>
    </div>
  );
};

const LoginButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="disabled:bg-gray-400 text-neutral-700 bg-emerald-500 hover:bg-emerald-300 transition-all w-full  px-8 py-1 rounded-lg font-primary"
    >
      {pending ? "Logging in..." : "Login"}
    </button>
  );
};

export default LoginForm;
