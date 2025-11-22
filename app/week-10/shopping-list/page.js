"use client";

import React, { useState, useEffect } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-service";
import NewItem from "../new-item";
import ItemList from "../item-list";
import MealIdeas from "../meal-ideas";

export default function Page() {
  const { user } = useUserAuth();
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  // Load items from Firestore for the logged-in user
  useEffect(() => {
    if (!user) return;

    const loadItems = async () => {
      try {
        const fetchedItems = await getItems(user.uid);
        setItems(fetchedItems);
      } catch (error) {
        console.error("Error loading items:", error);
      }
    };

    loadItems();
  }, [user]);

  // Add item to Firestore and then to local state
  const handleAddItem = async (newItem) => {
    if (!user) return;

    try {
      const itemId = await addItem(user.uid, newItem);
      setItems((prev) => [...prev, { id: itemId, ...newItem }]);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Handle selecting an item for MealIdeas
  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(/[\u{1F600}-\u{1F6FF}]/gu, "");
    setSelectedItemName(cleanedName);
  };

  // Not signed in
  if (!user) {
    return (
      <main className="p-6">
        Please sign in to view your shopping list. <br />
        <a href="/week-10" className="underline">
          Back to Week 10
        </a>
      </main>
    );
  }

  // Signed in – use Code 2 style/layout
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Shopping List</h1>

      <NewItem onAddItem={handleAddItem} />

      <ItemList items={items} onItemSelect={handleItemSelect} />

      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Meal Ideas</h2>
        <MealIdeas ingredient={selectedItemName} />
      </section>
    </main>
  );
}
