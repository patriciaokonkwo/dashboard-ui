// Updated TableHeader with scope and aria-labels
export const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col" aria-label="Status">Status</th>
        <th scope="col" aria-label="Name">Name</th>
        <th scope="col" aria-label="Value">Value</th>
      </tr>
    </thead>
  );
};