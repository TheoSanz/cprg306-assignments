"use client";

import { useMemo, useState } from "react";
import Item from "./item";
import items from "./items.json";

export default function ItemList() {
  // Only "name" or "category"
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = useMemo(() => {
    const list = [...items];
    if (sortBy === "name") {
      list.sort((a, b) =>
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      );
    } else if (sortBy === "category") {
      list.sort((a, b) =>
        a.category.localeCompare(b.category, undefined, { sensitivity: "base" }) ||
        a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
      );
    }
    return list;
  }, [sortBy]);

  const btnBase =
    "px-3 py-1 rounded-md border text-sm transition focus:outline-none focus:ring";
  const active = "bg-blue-600 text-white border-blue-600";
  const inactive =
    "bg-slate-200 text-slate-800 border-slate-300 hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-100 dark:border-slate-600 dark:hover:bg-slate-600";

  return (
    <section className="space-y-4">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setSortBy("name")}
          className={`${btnBase} ${sortBy === "name" ? active : inactive}`}
        >
          Sort by Name
        </button>
        <button
          type="button"
          onClick={() => setSortBy("category")}
          className={`${btnBase} ${sortBy === "category" ? active : inactive}`}
        >
          Sort by Category
        </button>
      </div>

      <ul className="grid gap-2">
        {sortedItems.map((it) => (
          <Item
            key={it.id}
            name={it.name}
            quantity={it.quantity}
            category={it.category}
          />
        ))}
      </ul>
    </section>
  );
}
