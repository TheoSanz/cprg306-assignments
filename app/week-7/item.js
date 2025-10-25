export default function Item({ item }) {
  const { name, quantity, category } = item;

  return (
    <li className="p-3 flex items-center justify-between">
      <div>
        <div className="font-semibold">{name}</div>
        <div className="text-xs opacity-70">Category: {category}</div>
      </div>
      <div className="text-sm">Qty: {quantity}</div>
    </li>
  );
}
