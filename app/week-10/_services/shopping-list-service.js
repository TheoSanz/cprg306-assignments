import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

/**
 * Get all items for a specific user from Firestore.
 * @param {string} userId
 * @returns {Promise<Array>}
 */
export async function getItems(userId) {
  const itemsRef = collection(db, "users", userId, "items");
  const q = query(itemsRef);
  const querySnapshot = await getDocs(q);

  const items = [];
  querySnapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      ...doc.data(), // name, quantity, category
    });
  });

  return items;
}

/**
 * Add a new item for a specific user.
 * @param {string} userId
 * @param {{name: string, quantity: number, category: string}} item
 * @returns {Promise<string>} New document id
 */
export async function addItem(userId, item) {
  const itemsRef = collection(db, "users", userId, "items");
  const docRef = await addDoc(itemsRef, item);
  return docRef.id;
}