export default function Item({ name, quantity, category }) {
  return (
    <li className="flex items-center justify-between rounded-xl border p-4 shadow-sm bg-white/70 hover:bg-white transition">
      <div className="flex flex-col">
        <span className="font-semibold">{name}</span>
        <span className="text-xs uppercase tracking-wide text-gray-500">
          {category}
        </span>
      </div>
      <span className="text-sm font-medium tabular-nums">Qty: {quantity}</span>
    </li>
  );
}