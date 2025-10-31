"use client";

export default function Item({ item, onSelect }) {
  const name = item?.name ?? item?.title ?? "";
  const quantity = item?.quantity ?? item?.qty ?? 1;
  const category = item?.category ?? item?.cat ?? "uncategorized";

  return (
    <li
      onClick={() => onSelect?.(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onSelect?.(item)}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 8,
        padding: "10px 12px",
        border: "1px solid #e2e2e2",
        borderRadius: 10,
        cursor: "pointer",
      }}
      aria-label={`Select ${name}`}
      title="Click to see meal ideas"
    >
      <div style={{ fontWeight: 600 }}>{name}</div>
      <div style={{ opacity: 0.8 }}>
        {quantity} • {category}
      </div>
    </li>
  );
}
