// app/week-9/shopping-list/item-list.js
"use client";

export default function ItemList({ items }) {
  if (!items?.length) return <p className="opacity-70">No items yet.</p>;
  return (
    <ul className="grid gap-2">
      {items.map((i, idx) => (
        <li key={idx} className="border rounded p-2 flex justify-between">
          <span>{i.name}</span>
          <span className="opacity-70 text-sm">Qty {i.quantity} • {i.category}</span>
        </li>
      ))}
    </ul>
  );
}
