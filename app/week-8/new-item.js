"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  function clamp(n) {
    if (n < 1) return 1;
    if (n > 20) return 20;
    return n;
  }

  function increment() {
    setQuantity((q) => clamp(q + 1));
  }
  function decrement() {
    setQuantity((q) => clamp(q - 1));
  }

  function makeId() {
    try {
      return crypto.randomUUID();
    } catch {
      return Math.random().toString(36).slice(2) + Date.now().toString(36);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const item = {
      id: makeId(),
      name: name.trim(),
      quantity,
      category,
    };

    if (!item.name) return;

    onAddItem(item);

    // reset
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/5 rounded-2xl p-4 shadow space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <label className="md:col-span-2 block">
          <span className="text-sm font-semibold">Item name</span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full mt-1 px-3 py-2 rounded border bg-white text-black"
            placeholder="e.g., Apples"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold">Category</span>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full mt-1 px-3 py-2 rounded border bg-white text-black"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen</option>
            <option value="canned">Canned</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>

      <div className="flex items-center gap-3">
        <div>
          <span className="text-sm font-semibold">Quantity (1–20)</span>
          <div className="mt-1 flex items-center gap-2">
            <button type="button" onClick={decrement} className="px-3 py-1 rounded border">–</button>
            <input
              type="number"
              min={1}
              max={20}
              value={quantity}
              onChange={(e) => setQuantity(clamp(Number(e.target.value)))}
              className="w-20 px-3 py-2 rounded border bg-white text-black text-center"
            />
            <button type="button" onClick={increment} className="px-3 py-1 rounded border">+</button>
          </div>
          <p className="text-xs opacity-70 mt-1">Allowed range: 1–20</p>
        </div>

        <div className="ml-auto">
          <button type="submit" className="px-4 py-2 rounded-2xl shadow border font-semibold">
            Add Item
          </button>
        </div>
      </div>
    </form>
  );
}
