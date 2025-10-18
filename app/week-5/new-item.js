"use client";
import { useState } from "react";

export default function NewItem() {
  const [name, setName] = useState("");          // New for Week 5
  const [quantity, setQuantity] = useState(1);   // From Week 4
  const [category, setCategory] = useState("produce");

  function increment() {
    if (quantity < 20) setQuantity(quantity + 1);
  }

  function decrement() {
    if (quantity > 1) setQuantity(quantity - 1);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const item = { name, quantity, category };
    console.log(item);

    alert(
      `Item Added:\n\nName: ${name}\nQuantity: ${quantity}\nCategory: ${category}`
    );
    setName("");
    setQuantity(1);
    setCategory("produce");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-slate-800 text-white p-6 rounded-2xl shadow-lg space-y-4"
    >
      <h2 className="text-xl font-bold text-center">Add New Item</h2>

      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Item Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="e.g., Apples"
          className="p-2 rounded-lg text-black"
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between">
          <span className="font-semibold">Quantity:</span>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={decrement}
              disabled={quantity === 1}
              className={`rounded-lg size-8 font-bold ${
                quantity === 1
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-red-500 hover:bg-red-600"
              }`}
            >
              –
            </button>
            <span className="bg-white text-black px-3 py-1 rounded-lg font-bold">
              {quantity}
            </span>
            <button
              type="button"
              onClick={increment}
              disabled={quantity === 20}
              className={`rounded-lg size-8 font-bold ${
                quantity === 20
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              +
            </button>
          </div>
        </div>
        <p className="text-sm text-gray-300 mt-1 text-right">
          Allowed range: 1–20
        </p>
      </div>

      <div className="flex flex-col">
        <label className="mb-1 font-semibold">Category</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-lg text-black"
        >
          <option value="produce">Produce</option>
          <option value="dairy">Dairy</option>
          <option value="bakery">Bakery</option>
          <option value="meat">Meat</option>
          <option value="frozen foods">Frozen Foods</option>
          <option value="canned goods">Canned Goods</option>
          <option value="dry goods">Dry Goods</option>
          <option value="beverages">Beverages</option>
          <option value="snacks">Snacks</option>
          <option value="household">Household</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 py-2 rounded-lg font-semibold"
      >
        Add Item
      </button>
    </form>
  );
}
