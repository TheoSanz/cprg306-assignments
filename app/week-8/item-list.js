"use client";

import Item from "./item";

export default function ItemList({ items = [], onItemSelect }) {
  return (
    <div>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
        Shopping List
      </h2>

      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 8,
          listStyle: "none",
          padding: 0,
          margin: 0,
        }}
      >
        {items.map((item, idx) => (
          <Item
            key={item.id ?? `${item.name}-${idx}`}
            item={item}
            onSelect={(it) => onItemSelect?.(it)}
          />
        ))}
      </ul>
    </div>
  );
}
