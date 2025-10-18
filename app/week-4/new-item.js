"use client";
import { useState } from "react";

const MIN = 1;
const MAX = 20;

export default function NewItem() {
  const [quantity, setQuantity] = useState(MIN);

  // one handler covers both +1 / -1 via delta
  const step = (delta) =>
    setQuantity((q) => Math.max(MIN, Math.min(MAX, q + delta)));

  const atMin = quantity === MIN;
  const atMax = quantity === MAX;

  return (
    <section className="mx-auto w-full max-w-[220px] rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
      <header className="mb-3 text-center">
        <h2 className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Select Quantity
        </h2>
      </header>

      <div className="grid grid-cols-[3rem_1fr_3rem] items-center gap-2">
        <button
          type="button"
          aria-label="Decrease quantity"
          disabled={atMin}
          onClick={() => step(-1)}
          className={`h-12 rounded-lg text-xl font-bold transition
            ${atMin
              ? "cursor-not-allowed bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500"
              : "bg-rose-500 text-white hover:bg-rose-600 active:scale-95"}`}
        >
          −
        </button>

        <output
          aria-live="polite"
          className="h-12 select-none rounded-lg border border-zinc-200 bg-zinc-50 text-center text-3xl font-semibold tabular-nums leading-[3rem] dark:border-zinc-700 dark:bg-zinc-800"
        >
          {quantity}
        </output>

        <button
          type="button"
          aria-label="Increase quantity"
          disabled={atMax}
          onClick={() => step(+1)}
          className={`h-12 rounded-lg text-xl font-bold transition
            ${atMax
              ? "cursor-not-allowed bg-zinc-200 text-zinc-500 dark:bg-zinc-800 dark:text-zinc-500"
              : "bg-emerald-500 text-white hover:bg-emerald-600 active:scale-95"}`}
        >
          +
        </button>
      </div>

      <p className="mt-2 text-center text-xs text-zinc-500">
        Min {MIN} · Max {MAX}
      </p>
    </section>
  );
}
