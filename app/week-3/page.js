import ItemList from "./item-list";

export default function Page() {
  return (
    <main className="mx-auto max-w-2xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Shopping List</h1>
      <ItemList />
    </main>
  );
}
