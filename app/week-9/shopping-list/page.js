// app/week-9/shopping-list/page.js
"use client";
import { useUserAuth } from "../../contexts/AuthContext";
import { useState } from "react";
import itemsSeed from "./items.json";
import NewItem from "./new-item";
import ItemList from "./item-list";

export default function ShoppingListPage() {
  const { user, initializing } = useUserAuth();
  const [items, setItems] = useState(itemsSeed || []);

  if (initializing) return <main className="p-6">Loading…</main>;
  if (!user) return <main className="p-6">Please sign in to view your shopping list.</main>;

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
