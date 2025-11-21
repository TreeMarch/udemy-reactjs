import { useState } from "react";
import Item from "./Item";
// import ItemDetail from "./ItemDetail";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");
  const [selectedItem, setSelectedItem] = useState(null);
  let sortedItems;

  switch (sortBy) {
    case "input":
      sortedItems = items.slice();
      break;
    case "description":
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
      break;
    case "packed":
      sortedItems = items
        .slice()
        .sort((a, b) => Number(a.packed) - Number(b.packed));
      break;
    default:
      sortedItems = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            onViewDetail={setSelectedItem}
          />
        ))}
      </ul>
      {sortedItems.length > 0 && (
        <div className="actions">
          {sortedItems.length > 1 && (
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          )}
          <button onClick={onClearList}>Clear list</button>
        </div>
      )}
      {/* {selectedItem && (
        <ItemDetail item={selectedItem} onClose={() => setSelectedItem(null)} />
      )} */}
    </div>
  );
}
