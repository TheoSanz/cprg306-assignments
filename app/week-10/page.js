"use client";

import Link from "next/link";
// Import the useUserAuth hook
import { useUserAuth } from "../contexts/AuthContext";
import { useState } from "react";

export default function Week10() {
  // Use the useUserAuth hook to get the user object and the login and logout functions
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  // Sign in to Firebase with GitHub authentication
  async function handleSignIn() {
    setErr("");
    setLoading(true);
    try {
      await gitHubSignIn();
    } catch (e) {
      setErr(e?.message ?? "Sign-in failed");
    } finally {
      setLoading(false);
    }
  }

  // Sign out of Firebase
  async function handleSignOut() {
    setErr("");
    setLoading(true);
    try {
      await firebaseSignOut();
    } catch (e) {
      setErr(e?.message ?? "Sign-out failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Week 10</h1>

      {!user ? (
        <>
          <button
            onClick={handleSignIn}
            disabled={loading}
            className="border rounded px-3 py-1 disabled:opacity-60"
          >
            {loading ? "Signing in…" : "Sign in with GitHub"}
          </button>
          {err && <p className="text-red-600">{err}</p>}
        </>
      ) : (
        <>
          {/* Display some of the user's information */}
          <p>
            Welcome, <b>{user.displayName || user.email}</b>{" "}
            {user.email && <span>({user.email})</span>}
          </p>

          <div className="flex gap-3">
            <Link href="/week-10/shopping-list" className="underline">
              Go to Shopping List →
            </Link>
            <button
              onClick={handleSignOut}
              disabled={loading}
              className="border rounded px-3 py-1 disabled:opacity-60"
            >
              {loading ? "Signing out…" : "Log out"}
            </button>
          </div>

          {err && <p className="text-red-600">{err}</p>}
        </>
      )}
    </main>
  );
}
