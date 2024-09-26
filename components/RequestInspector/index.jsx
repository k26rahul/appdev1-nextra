import React, { useState } from 'react';
import styles from './styles.module.css';

export default function RequestInspector() {
  const [url, setUrl] = useState('https://api.ipify.org/?format=json');
  const [requestHeaders, setRequestHeaders] = useState({});
  const [responseHeaders, setResponseHeaders] = useState({});
  const [responseBody, setResponseBody] = useState('');
  const [activeTab, setActiveTab] = useState('requestHeaders');
  const [status, setStatus] = useState('idle'); // idle | pending | resolved | rejected

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('pending');
    setRequestHeaders({});
    setResponseHeaders({});
    setResponseBody('');

    const customHeaders = new Headers({
      // You can add any custom headers here if needed
      // 'Content-Type': 'application/json',
    });

    try {
      const response = await fetch(url, {
        method: 'GET', // or 'POST', 'PUT', etc.
        headers: customHeaders, // Use the headers you've created
      });

      const requestHeadersObj = {};
      customHeaders.forEach((value, key) => {
        requestHeadersObj[key] = value;
      });
      setRequestHeaders(requestHeadersObj);

      const responseHeadersObj = {};
      response.headers.forEach((value, key) => {
        responseHeadersObj[key] = value;
      });
      setResponseHeaders(responseHeadersObj);

      const body = await response.text();
      setResponseBody(body);

      setStatus('resolved');
    } catch (error) {
      setStatus('rejected');
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'requestHeaders':
        return <pre>{JSON.stringify(requestHeaders, null, 2)}</pre>;
      case 'responseHeaders':
        return <pre>{JSON.stringify(responseHeaders, null, 2)}</pre>;
      case 'responseBody':
        return <pre>{responseBody}</pre>;
      default:
        return null;
    }
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <h1>Request Inspector Tool</h1>
        <p>Fetch data from a URL and view request/response details</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="url">URL</label>
          <input
            type="url"
            id="url"
            value={url}
            onChange={e => setUrl(e.target.value)}
            required
          />
          <button type="submit" disabled={status === 'pending'}>
            {status === 'pending' ? 'Fetching...' : 'Fetch Data'}
          </button>
        </form>

        {status === 'resolved' && (
          <div className={styles.resultContainer}>
            <div className={styles.tabs}>
              <button
                className={activeTab === 'requestHeaders' ? styles.active : ''}
                onClick={() => setActiveTab('requestHeaders')}
              >
                Request Headers
              </button>
              <button
                className={activeTab === 'responseHeaders' ? styles.active : ''}
                onClick={() => setActiveTab('responseHeaders')}
              >
                Response Headers
              </button>
              <button
                className={activeTab === 'responseBody' ? styles.active : ''}
                onClick={() => setActiveTab('responseBody')}
              >
                Response Body
              </button>
            </div>
            <div className={styles.tabContent}>{renderContent()}</div>
          </div>
        )}

        {status === 'rejected' && (
          <p className={styles.error}>Error occurred while fetching data.</p>
        )}
      </div>
    </div>
  );
}
