import NewItem from "./new-item";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Week 5 – New Item
      </h1>
      <NewItem />
    </main>
  );
}
