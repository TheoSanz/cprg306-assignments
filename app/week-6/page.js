import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}
