import React, { useState } from 'react';
import styles from './styles.module.css';

const apiUrls = {
  ipinfo: 'https://ipinfo.io/json',
  ipify: 'https://api.ipify.org/?format=json',
};

export default function IPLookup() {
  const [selectedApi, setSelectedApi] = useState('ipinfo');
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('idle'); // idle | pending | resolved | rejected

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('pending');
    setResult('');

    try {
      const response = await fetch(apiUrls[selectedApi]);
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
      setStatus('resolved');
    } catch (error) {
      setResult('Error occurred while fetching IP information.');
      setStatus('rejected');
    }
  };

  return (
    <div className={styles['card-wrapper']}>
      <div className={styles.card}>
        <h1>IP Lookup Tool</h1>
        <p>Query IP information from different APIs</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="apiSelect">Select API</label>
          <select
            id="apiSelect"
            value={selectedApi}
            onChange={e => setSelectedApi(e.target.value)}
          >
            <option value="ipinfo">ipinfo.io</option>
            <option value="ipify">api.ipify.org</option>
          </select>

          <button type="submit" disabled={status === 'pending'}>
            {status === 'pending' ? 'Querying...' : 'Query IP'}
          </button>
        </form>

        {/* Conditional rendering based on status */}
        {status === 'idle' && <p>Select an API and click "Query IP"</p>}
        {status === 'pending' && <p>Loading...</p>}
        {status === 'resolved' && result && <pre>{result}</pre>}
        {status === 'rejected' && (
          <p>Error occurred while fetching IP information.</p>
        )}
      </div>
    </div>
  );
}
