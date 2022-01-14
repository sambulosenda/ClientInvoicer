export default function TableForm({ description, setDescription,
    quantity,
    setQuantity,
    unitPrice,
    setUnitPrice,
    amount,
    setAmount,



}) {
  return (
    <>
     
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


      <div className="flex flex-col">
        <label htmlFor="description">Quantity</label>
        <input
          className="bg-gray-200 p-2 mb-3 rounded border-2 "
          type="text"
          name="quantity"
          id="description"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>


      <div className="flex flex-col">
        <label htmlFor="price">Price</label>
        <input
          className="bg-gray-200 p-2 mb-3 rounded border-2 "
          type="text"
          name="price"
          id="price"
          placeholder="price"
          value={unitPrice}
          onChange={(e) => setUnitPrice(e.target.value)}
        />
      </div>


      <div className="flex flex-col">
        <label htmlFor="description"> amount</label>
        <input
          className="bg-gray-200 p-2 mb-3 rounded border-2 "
          type="text"
          name="amount"
          id="amount"
          placeholder="Item amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
    </>
  );
}
