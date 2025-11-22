// app/week-9/shopping-list/new-item.js
"use client";
import { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("other");

  function submit(e) {
    e.preventDefault();
    if (!name.trim()) return;
    onAddItem({ name: name.trim(), quantity: Number(quantity), category });
    setName("");
    setQuantity(1);
    setCategory("other");
  }

  return (
    <form onSubmit={submit} className="flex gap-2 items-end flex-wrap">
      <div className="flex flex-col">
        <label>Name</label>
        <input className="border rounded px-2 py-1" value={name} onChange={(e)=>setName(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label>Quantity</label>
        <input className="border rounded px-2 py-1" type="number" min="1" max="100" value={quantity} onChange={(e)=>setQuantity(e.target.value)} />
      </div>
      <div className="flex flex-col">
        <label>Category</label>
        <select className="border rounded px-2 py-1" value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option>produce</option><option>dairy</option><option>bakery</option><option>meat</option>
          <option>frozen foods</option><option>canned goods</option><option>dry goods</option>
          <option>beverages</option><option>snacks</option><option>household</option><option>other</option>
        </select>
      </div>
      <button className="border rounded px-3 py-1">Add</button>
    </form>
  );
}
