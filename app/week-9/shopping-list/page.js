"use client";

import { useUserAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import itemsSeed from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";

export default function ShoppingListPage() {
  const { user } = useUserAuth();
  const [items, setItems] = useState(itemsSeed || []);

  if (!user) {
    return (
      <main className="p-6">
        Please sign in to view your shopping list. <br />
        <a href="/week-9" className="underline">Back to Week 9</a>
      </main>
    );
  }

  function handleAddItem(item) {
    setItems((prev) => [item, ...prev]);
  }

  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
}
