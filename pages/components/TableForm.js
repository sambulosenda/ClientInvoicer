import React, { useState, useEffect } from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";

export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  unitPrice,
  setUnitPrice,
  amount,
  setAmount,
  setList,
  list,
  total,
  setTotal,
}) {
  const [isEditing, setIsEditing] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();

    const newItems = {
      id: uuidv4(),
      description,
      quantity,
      unitPrice,
      amount,
    };
    setDescription("");
    setQuantity("");
    setUnitPrice("");
    setAmount("");
    setList([...list, newItems]);
    setIsEditing(false);
  };

  //edit function

  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * unitPrice);
    };
    calculateAmount(amount);
  }, [amount, quantity, unitPrice]);

  //calculate total amount of Items in the list
useEffect( () => {

  let rows = document.querySelectorAll(".amount");
  let sum = 0;
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].className === "amount") {
      sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML);
      setTotal(sum);
    }
  }

}, [])
  //edit function
  const editRow = (id) => {
    const editingRow = list.find((item) => item.id === id);
    setList(list.filter((item) => item.id !== id));
    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setUnitPrice(editingRow.unitPrice);
  };

  // delate button
  const DeleteRow = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

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
          {isEditing ? "Editing" : "Add Table item"}{" "}
        </button>
      </form>

      <section>
        <table width="100%" className="mt-10 mb-10">
          <thead>
            <tr className="bg-gray-100 p-1">
              <td>Description</td>
              <td>Quality</td>
              <td>Price</td>
              <td>Amount</td>
            </tr>
          </thead>
          {list.map(({ id, description, quantity, unitPrice, amount }) => (
            <React.Fragment key={id}>
              <tbody>
                <tr>
                  <td>{description}</td>
                  <td>{quantity}</td>
                  <td>{unitPrice}</td>
                  <td className="amount">{amount}</td>
                  <td>
                    <button onClick={() => DeleteRow(id)}>
                      <AiOutlineDelete className="text-red-500 font-bold" />
                    </button>
                  </td>
                  <td>
                    <button>
                      <AiOutlineEdit
                        className="text-blue-500 font-bold"
                        onClick={() => editRow(id)}
                      />
                    </button>
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          ))}
        </table>

        <div>
          <h2 className="font-bold">Total: £{total.toLocaleString()}</h2>
        </div>
      </section>
    </>
  );
}
