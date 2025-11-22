"use client";

import React, { useState, useEffect } from "react";
import NewItem from "../new-item";
import ItemList from "../item-list";
import MealIdeas from "../meal-ideas";
import { getItems, addItem } from "../_services/shopping-list-service";
import { useUserAuth } from "../_utils/auth-context"; // Import the auth context

export default function Page() {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user } = useUserAuth(); // Get the authenticated user

  const loadItems = async () => {
    if (!user) return; // Ensure user is authenticated
    const fetchedItems = await getItems(user.uid);
    setItems(fetchedItems);
  };

  useEffect(() => {
    loadItems();
  }, [user]); // Reload items when user changes

  const handleAddItem = async (newItem) => {
    if (!user) return; // Ensure user is authenticated
    console.log("New item to add:", newItem); // Debugging: Log the newItem

    try {
      const itemId = await addItem(user.uid, newItem);
      setItems((prevItems) => [...prevItems, { id: itemId, ...newItem }]);
    } catch (error) {
      console.error("Error adding item:", error); // Log Firestore errors
    }
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name.split(",")[0].trim().replace(/[\u{1F600}-\u{1F6FF}]/gu, "");
    setSelectedItemName(cleanedName);
  };

  if (!user) {
    return <p>Loading...</p>; // Show a loading state if user is not authenticated
  }

  return (
    <div className="flex flex-col lg:flex-row p-5 bg-gray-900 text-white min-h-screen">
      <div className="flex-1 lg:mr-5 mb-5 lg:mb-0">
        <h1 className="text-3xl mb-5">Shopping List</h1>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1 lg:mr-5">
            <NewItem onAddItem={handleAddItem} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row mt-5">
          <div className="flex-1 lg:mr-5">
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <div className="flex-1 lg:ml-5">
            <h2 className="text-2xl mb-4">Meal Ideas</h2>
            <MealIdeas ingredient={selectedItemName} />
          </div>
        </div>
      </div>
    </div>
  );
}