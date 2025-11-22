import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

export async function getItems(userId) {
  const items = [];
  const itemsRef = collection(db, "users", userId, "items");
  const querySnapshot = await getDocs(itemsRef);
  querySnapshot.forEach((doc) => {
    items.push({ id: doc.id, ...doc.data() });
  });
  return items;
}

export async function addItem(userId, item) {
  try {
    if (typeof item.name !== "string" || item.name.length < 1 || item.name.length > 50) {
      throw new Error("Invalid name: Must be a string between 1 and 50 characters.");
    }
    if (typeof item.quantity !== "number" || item.quantity < 1 || item.quantity > 100) {
      throw new Error("Invalid quantity: Must be an integer between 1 and 100.");
    }
    if (
      typeof item.category !== "string" ||
      ![
        "produce",
        "dairy",
        "bakery",
        "meat",
        "frozen foods",
        "canned goods",
        "dry goods",
        "beverages",
        "snacks",
        "household",
        "other",
      ].includes(item.category)
    ) {
      throw new Error("Invalid category: Must be one of the predefined categories.");
    }

    console.log("Adding item for user:", userId); // Debugging: Log the userId
    const itemsRef = collection(db, "users", userId, "items");
    const docRef = await addDoc(itemsRef, item);
    return docRef.id;
  } catch (error) {
    console.error("Error adding item:", error.message); // Log the specific error
    throw error;
  }
}