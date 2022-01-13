export default function TableForm({ description, setDescription }) {
  return (
    <div className="flex flex-col">
      <label htmlFor="description">Item description</label>
      <input
        className="bg-gray-200 p-2 mb-3 rounded border-2 "
        type="text"
        name="description"
        id="description"
        placeholder="Item description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
}
