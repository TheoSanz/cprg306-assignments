"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  function handleAddItem(item) {
    // immutably add to the top of the list
    setItems((prev) => [item, ...prev]);
  }

  return (
    <main className="max-w-3xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold">Week 7 – Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}