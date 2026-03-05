import React, { useState } from 'react';

export function PaymentForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || isNaN(Number(amount))) {
      setError('Please enter a valid amount');
      return;
    }
    setError(null);
    onSubmit({ amount: Number(amount) });
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Payment form">
      {error && <div role="alert" className="text-red-500">{error}</div>}
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)}
             aria-label="Payment amount" placeholder="Amount" />
      <button type="submit">Pay</button>
    </form>
  );
}
