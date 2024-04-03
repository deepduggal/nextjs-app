'use client';
import React, { useState } from 'react';

export default function UserForm() {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Hello, ${name}!`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value.trim())}
          placeholder="Enter your name..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
