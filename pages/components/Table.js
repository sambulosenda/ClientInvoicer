import React from "react";

export default function Table({ list, total }) {
  return (
    <>
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
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
          <h2 className="font-bold">Total: £{total.toLocaleString()}</h2>
        </div>
    </>
  );
}
