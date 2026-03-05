import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { fetchPayments } from '../api/payments';

interface Payment {
  id: string;
  amount: number;
  currency: string;
  status: 'completed' | 'failed' | 'pending';
  createdAt: string;
}

export function PaymentTable() {
  const { data, isLoading } = useQuery(['payments'], fetchPayments);
  if (isLoading) return <div>Loading...</div>;

  return (
    <table className="w-full border-collapse">
      <thead><tr><th>ID</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead>
      <tbody>
        {data?.map((p: Payment) => (
          <tr key={p.id}>
            <td>{p.id}</td><td>{p.amount} {p.currency}</td>
            <td>{p.status}</td><td>{p.createdAt}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
