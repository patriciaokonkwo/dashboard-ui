export const PaymentTable = () => {
  return (
    <table aria-label="Payment Table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Amount</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2024-03-01</td>
          <td>$100.00</td>
          <td>Completed</td>
        </tr>
      </tbody>
    </table>
  );
};