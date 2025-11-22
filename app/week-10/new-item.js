"use client";
import React, { useState } from "react";

export default function NewItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (
      typeof name !== "string" ||
      name.length < 1 ||
      name.length > 50 ||
      typeof quantity !== "number" ||
      quantity < 1 ||
      quantity > 100 ||
      typeof category !== "string" ||
      ![
        "produce",
        "dairy",
        "bakery",
        "meat",
        "frozen foods",
        "canned goods",
        "dry goods",
        "beverages",
        "snacks",
        "household",
        "other",
      ].includes(category)
    ) {
      console.error("Invalid input data");
      return;
    }

    // Create new item
    const newItem = { name, quantity, category };
    onAddItem(newItem);

    // Reset form
    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5 p-4 bg-gray-800 rounded max-w-md">
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 mb-2 w-full bg-gray-700 text-white rounded"
      />
      <div className="flex mb-2">
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          className="p-2 w-1/3 bg-gray-700 text-white rounded mr-2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 w-2/3 bg-gray-700 text-white rounded"
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
      <button type="submit" className="p-2 w-full bg-blue-500 text-white rounded">Add Item</button>
    </form>
  );
}
