import React from 'react';
import './style.css';
import { useState, useEffect } from 'react';
import LoadingData from './LoadingData';

export default function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 9000);
  }, []);

  return (
    <div className="container1">
      {loading ? (
        <LoadingData />
      ) : (
        <div>
          <h1>Hello StackBlitz!</h1>
          <h1>Hello bubs!</h1>
        </div>
      )}
    </div>
  );
}
