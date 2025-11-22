"use client";

import React, { useState } from "react";
import itemsData from "./items.json";

export default function ShoppingList() {
  const [items, setItems] = useState(itemsData);
  const [newItem, setNewItem] = useState("");
  const [category, setCategory] = useState("produce");
  const [quantity, setQuantity] = useState(1);

  const categories = [
    "produce",
    "dairy",
    "bakery",
    "meat",
    "frozen",
    "canned",
    "dry",
    "beverages",
    "snacks",
    "household",
    "other",
  ];

  const addItem = () => {
    if (newItem.trim() !== "" && quantity > 0) {
      const newItemObject = { name: newItem.trim(), category, quantity };
      setItems([...items, newItemObject]);
      setNewItem("");
      setCategory("produce");
      setQuantity(1);
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8 bg-gray-800 text-white rounded">
      <h1 className="text-2xl mb-4">Shopping List</h1>
      <div className="mb-4">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item"
          className="p-2 rounded bg-gray-700 text-white mr-2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded bg-gray-700 text-white mr-2"
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          className="p-2 rounded bg-gray-700 text-white mr-2 w-16"
        />
        <button onClick={addItem} className="p-2 bg-blue-500 rounded text-white">
          Add
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center mb-2">
            <span>
              {item.name} - {item.category.charAt(0).toUpperCase() + item.category.slice(1)} (x{item.quantity})
            </span>
            <button
              onClick={() => removeItem(index)}
              className="p-1 bg-red-500 rounded text-white"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
