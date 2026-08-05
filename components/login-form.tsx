"use client";

import { useActionState, useState } from "react";
import { Eye, EyeOff } from "lucide-react";

import { authenticate, createUser } from "@/lib/actions";

export function LoginForm() {
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const [loginMessage, loginAction, isLoginPending] = useActionState(
    authenticate,
    undefined
  );

  const [registerMessage, registerAction, isRegisterPending] =
    useActionState(createUser, undefined);

  return (
    <div className="space-y-8">
      {/* Sign In */}
      <section className="rounded-lg border bg-white p-6 shadow-sm">
        <h2 className="mb-5 text-2xl font-bold text-[#003566]">
          Sign In
        </h2>

        <form action={loginAction} className="space-y-5">
          <div>
            <label
              htmlFor="login-email"
              className="mb-2 block font-semibold"
            >
              Email
            </label>

            <input
              id="login-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0077B6] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="login-password"
              className="mb-2 block font-semibold"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="login-password"
                name="password"
                type={showLoginPassword ? "text" : "password"}
                autoComplete="current-password"
                minLength={6}
                required
                className="w-full rounded-lg border border-gray-300 p-3 pr-12 focus:border-[#0077B6] focus:outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowLoginPassword((current) => !current)
                }
                aria-label={
                  showLoginPassword ? "Hide password" : "Show password"
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showLoginPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoginPending}
            className="w-full rounded-lg bg-[#F77F00] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {isLoginPending ? "Signing In..." : "Sign In"}
          </button>

          {loginMessage && (
            <p className="text-red-600" role="alert">
              {loginMessage}
            </p>
          )}
        </form>
      </section>

      {/* Create Account */}
      <section className="rounded-lg border bg-gray-50 p-6">
        <h2 className="mb-2 text-2xl font-bold text-[#003566]">
          Need an account?
        </h2>

        <p className="mb-5 text-gray-700">
          Create an account to save and manage your recipes.
        </p>

        <form action={registerAction} className="space-y-5">
          <div>
            <label
              htmlFor="register-name"
              className="mb-2 block font-semibold"
            >
              Full Name
            </label>

            <input
              id="register-name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0077B6] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="register-email"
              className="mb-2 block font-semibold"
            >
              Email
            </label>

            <input
              id="register-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#0077B6] focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="register-password"
              className="mb-2 block font-semibold"
            >
              Password
            </label>

            <div className="relative">
              <input
                id="register-password"
                name="password"
                type={showRegisterPassword ? "text" : "password"}
                autoComplete="new-password"
                minLength={6}
                required
                className="w-full rounded-lg border border-gray-300 p-3 pr-12 focus:border-[#0077B6] focus:outline-none"
              />

              <button
                type="button"
                onClick={() =>
                  setShowRegisterPassword((current) => !current)
                }
                aria-label={
                  showRegisterPassword
                    ? "Hide password"
                    : "Show password"
                }
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600"
              >
                {showRegisterPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isRegisterPending}
            className="w-full rounded-lg bg-[#0077B6] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
          >
            {isRegisterPending
              ? "Creating Account..."
              : "Create Account"}
          </button>

          {registerMessage && (
            <p
              className={
                registerMessage.includes("successfully")
                  ? "text-green-700"
                  : "text-red-600"
              }
              role="status"
            >
              {registerMessage}
            </p>
          )}
        </form>
      </section>
    </div>
  );
}