"use client";

import { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import itemsSeed from "./items.json";

function stripEmojis(str) {
  try {
    return str.replace(/\p{Extended_Pictographic}/gu, "");
  } catch {
    return str
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\u24C2|[\u2190-\u21FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|\uD83E[\uDD00-\uDFFF])/g,
        ""
      )
      .replace(/[\u2000-\u206F]/g, "");
  }
}

function cleanItemName(rawName = "") {
  const beforeComma = rawName.split(",")[0];
  return stripEmojis(beforeComma).trim().toLowerCase();
}

export default function Page() {
  const [items, setItems] = useState(itemsSeed ?? []);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleAddItem(newItem) {
    // Expecting newItem: { id?, name, quantity, category }
    setItems((prev) => [
      ...prev,
      { ...newItem, id: newItem.id ?? crypto.randomUUID() },
    ]);
  }

  function handleItemSelect(item) {
    const cleaned = cleanItemName(item?.name ?? "");
    setSelectedItemName(cleaned);
  }

  return (
    <main style={{ padding: 16 }}>
      <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16 }}>
        Shopping List + Meal Ideas
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 24,
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "1 1 420px", maxWidth: 560 }}>
          <NewItem onAddItem={handleAddItem} />

          <div style={{ height: 16 }} />

          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>

        <div style={{ flex: "1 1 360px", maxWidth: 620 }}>
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
