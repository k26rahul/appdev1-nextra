import React, { useState } from 'react';
import styles from './DnsLookup.module.css'; // Import the CSS module

const DnsLookup = () => {
  const [domain, setDomain] = useState('');
  const [recordType, setRecordType] = useState('A');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setResult('');

    try {
      const response = await fetch(
        `https://dns.google/resolve?name=${domain}&type=${recordType}`
      );
      const data = await response.json();
      setResult(JSON.stringify(data, null, 2));
    } catch (error) {
      setResult('Error occurred while fetching DNS information.');
    } finally {
      setLoading(false);
    }
  };

  return (
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

        <button type="submit" disabled={loading}>
          {loading ? 'Querying...' : 'Query DNS'}
        </button>
      </form>
      <pre>{result}</pre>
    </div>
  );
};

export default DnsLookup;
