"use client";

export default function Item({ name, quantity, category }) {
  return (
    <li className="rounded-md border border-slate-700/40 bg-white/5 p-3 hover:bg-white/10 transition">
      <div className="flex items-center justify-between">
        <span className="font-medium">{name}</span>
        <span className="text-sm text-slate-400">Qty: {quantity}</span>
      </div>
      <p className="text-xs text-slate-400 capitalize mt-1">{category}</p>
    </li>
  );
}
