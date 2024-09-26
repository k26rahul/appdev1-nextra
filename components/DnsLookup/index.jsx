import React, { useState } from 'react';
import styles from './styles.module.css';

export default function DNSLookup() {
  const [domain, setDomain] = useState('google.com');
  const [recordType, setRecordType] = useState('A');
  const [result, setResult] = useState('');
  const [status, setStatus] = useState('idle'); // idle | pending | resolved | rejected

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('pending');
    setResult('');

    try {
      const response = await fetch(
        `https://dns.google/resolve?name=${domain}&type=${recordType}`
      );
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
      setStatus('resolved');
    } catch (error) {
      setResult('Error occurred while fetching DNS information.');
      setStatus('rejected');
    }
  };

  return (
    <div className={styles['card-wrapper']}>
      <div className={styles.card}>
        <h1>DNS Lookup Tool</h1>
        <p>Query DNS records for a domain</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="domain">Domain Name</label>
          <input
            type="text"
            id="domain"
            placeholder="Enter domain name"
            value={domain}
            onChange={e => setDomain(e.target.value)}
            required
          />

          <label htmlFor="recordType">DNS Record Type</label>
          <select
            id="recordType"
            value={recordType}
            onChange={e => setRecordType(e.target.value)}
          >
            <option value="A">A</option>
            <option value="AAAA">AAAA</option>
            <option value="CNAME">CNAME</option>
            <option value="MX">MX</option>
            <option value="PTR">PTR</option>
            <option value="TXT">TXT</option>
          </select>

          <button type="submit" disabled={status === 'pending'}>
            {status === 'pending' ? 'Querying...' : 'Query DNS'}
          </button>
        </form>

        {/* Conditional rendering based on status */}
        {status === 'pending' && <p>Loading...</p>}
        {status === 'resolved' && result && <pre>{result}</pre>}
        {status === 'rejected' && (
          <p>Error occurred while fetching DNS information.</p>
        )}
      </div>
    </div>
  );
}
