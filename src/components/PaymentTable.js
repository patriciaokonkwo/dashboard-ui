// Updated PaymentTable component
// Added aria-labels for accessibility

const PaymentTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th scope="col" aria-label="Payment ID">ID</th>
          <th scope="col" aria-label="Payment Status">Status</th>
          <th scope="col" aria-label="Payment Amount">Amount</th>
        </tr>
      </thead>
      <tbody>
        {/* Table rows go here */}
      </tbody>
    </table>
  );
};

export default PaymentTable;