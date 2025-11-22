// app/week-9/page.js
"use client";
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Week9() {
  const { user, initializing, gitHubSignIn, firebaseSignOut } = useUserAuth();

  if (initializing) return <main className="p-6">Loading…</main>;

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Week 9</h1>
      {!user ? (
        <button onClick={gitHubSignIn} className="border rounded px-3 py-1">
          Sign in with GitHub
        </button>
      ) : (
        <div className="space-y-3">
          <p>
            Welcome, <b>{user.displayName || user.email}</b>
          </p>
          <div className="flex gap-3">
            <Link href="/week-9/shopping-list" className="underline">
              Go to Shopping List →
            </Link>
            <button onClick={firebaseSignOut} className="border rounded px-3 py-1">
              Log out
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
