export default function Table({description, quantity, unitPrice, amount}) {
    return (
        <>
        <table width="100%" className="mt-10">
            <thead>
              <tr className="bg-gray-100 p-1">
                  <td>Description</td>
                  <td>Quality</td>
                  <td>Price</td>
                  <td>Amount</td>
              </tr>
            </thead>


            <tbody>
                <tr>
                <td>{description}</td>
                  <td>{quantity}</td>
                  <td>{unitPrice}</td>
                  <td>{amount}</td>
                </tr>
                </tbody>
    

        </table>
       
        </>
    )
}
