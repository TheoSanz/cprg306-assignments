"use client";

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-100">
      {!user ? (
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md text-center">
          <h1 className="text-2xl font-semibold mb-4">
            Welcome to the Shopping List App
          </h1>
          <button
            onClick={gitHubSignIn}
            className="px-4 py-2 rounded bg-slate-800 text-white hover:bg-slate-900"
          >
            Login with GitHub
          </button>
        </div>
      ) : (
        <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-md text-center">
          <h1 className="text-2xl font-semibold text-black mb-2">
            Welcome, {user.displayName}
          </h1>
          <p className="mb-4 text-gray-700">Email: {user.email}</p>

          <button
            onClick={firebaseSignOut}
            className="mb-4 px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
          >
            Logout
          </button>

          <div>
            <Link
              href="/week-10/shopping-list"
              className="inline-block px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
            >
              Go to Shopping List
            </Link>
          </div>
        </div>
      )}
    </main>
  );
}
