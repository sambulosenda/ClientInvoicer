import { useEffect } from "react";

export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  unitPrice,
  setUnitPrice,
  amount,
  setAmount,
}) {
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(description, quantity, unitPrice, amount);
  };
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * unitPrice);
    };
    calculateAmount(amount);
  }, [amount, quantity, unitPrice]);

  return (
    <>
      <form onSubmit={handlesubmit}>
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
          {amount}
        </div>

        <button
          className="bg-blue-500 py-2 mb-5  px-8 font-bold rounded shadow border-2 border-blue-500 text-white hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          type="submit"
        >
          Add Table Item
        </button>
      </form>
    </>
  );
}
