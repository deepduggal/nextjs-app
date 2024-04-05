'use client';
import React, { useEffect, useState } from 'react';

export default function StarWarsCharacter() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    async function getLuke() {
      setLoading(true);

      try {
        const response = await fetch('https://swapi.dev/api/people/1');
        const data = await response.json();
        
        // Handle bad response
        if (!response.ok) {
          setError(data?.detail ?? 'Error fetching data');
        }
        else {
          setData(data);
        }
      } catch (error) {
        setError(error);
      }
      finally {
        setLoading(false);
      }
      
    }

    getLuke();
  }, []);

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && (
        <div>
          <div>Name: {data.name}</div>
        </div>
      )}
    </div>
  );
}
