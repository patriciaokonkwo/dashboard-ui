// Updated PaymentTable.js with aria-labels

// Example of adding aria-labels
const PaymentTable = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th scope="col" aria-label="Payment Status">Status</th>
                    <th scope="col" aria-label="Payment Amount">Amount</th>
                </tr>
            </thead>
            <tbody>
                {/* Table rows */}
            </tbody>
        </table>
    );
};

export default PaymentTable;