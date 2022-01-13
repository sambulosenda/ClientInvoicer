export default function Table({description}) {
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
                  <td>20</td>
                  <td>500</td>
                  <td>10000</td>
                </tr>
                </tbody>
    

        </table>
       
        </>
    )
}
