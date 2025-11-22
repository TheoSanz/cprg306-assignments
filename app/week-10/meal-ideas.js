"use client";

import { useEffect, useState } from "react";

/** Fetch meals that include an ingredient*/
async function fetchMealIdeas(ingredient) {
  if (!ingredient) return [];
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURIComponent(
    ingredient
  )}`;
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load meal ideas.");
  const data = await res.json();
  // API returns { meals: null } when no matches
  return Array.isArray(data?.meals) ? data.meals : [];
}

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      if (!ingredient) {
        setMeals([]);
        setStatus("idle");
        setError("");
        return;
      }
      setStatus("loading");
      setError("");
      try {
        const m = await fetchMealIdeas(ingredient);
        if (!cancelled) {
          setMeals(m);
          setStatus("done");
        }
      } catch (e) {
        if (!cancelled) {
          setMeals([]);
          setStatus("error");
          setError(e?.message || "Something went wrong.");
        }
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [ingredient]);

  return (
    <div style={{ width: "100%", maxWidth: 560 }}>
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
        Meal ideas {ingredient ? `for “${ingredient}”` : ""}
      </h2>

      {status === "idle" && (
        <p style={{ opacity: 0.8 }}>
          Select an item from your shopping list to see meal ideas.
        </p>
      )}

      {status === "loading" && <p>Loading meal ideas…</p>}

      {status === "error" && (
        <p style={{ color: "crimson" }}>Error: {error}</p>
      )}

      {status === "done" && meals.length === 0 && (
        <p>No meals found. Try another item.</p>
      )}

      {meals.length > 0 && (
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
            gap: 12,
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {meals.map((m) => (
            <li
              key={m.idMeal}
              style={{
                border: "1px solid #e2e2e2",
                borderRadius: 12,
                padding: 10,
              }}
            >
              <img
                src={m.strMealThumb}
                alt={m.strMeal}
                width={320}
                height={200}
                style={{
                  width: "100%",
                  height: 140,
                  objectFit: "cover",
                  borderRadius: 8,
                  display: "block",
                  marginBottom: 8,
                }}
                loading="lazy"
              />
              <div style={{ fontWeight: 600 }}>{m.strMeal}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
