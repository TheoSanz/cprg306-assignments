"use client";

import { useMemo, useState } from "react";
import Item from "./item";

const compareFns = {
  name: (a, b) => a.name.localeCompare(b.name),
  category: (a, b) => a.category.localeCompare(b.category),
};

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  // Work on a copy; always ascending
  const sorted = useMemo(() => {
    const copy = [...items];
    const cmp = compareFns[sortBy] ?? compareFns.name;
    copy.sort(cmp);
    return copy;
  }, [items, sortBy]);

  return (
    <section className="space-y-3">
      <div className="flex items-center gap-3">
        <label className="text-sm">
          Sort by
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="ml-2 px-2 py-1 rounded border bg-white text-black"
          >
            <option value="name">Name</option>
            <option value="category">Category</option>
          </select>
        </label>
      </div>

      <ul className="divide-y divide-white/10 rounded-2xl overflow-hidden">
        {sorted.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
