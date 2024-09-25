import React from 'react';
import Head from 'next/head';
import DnsLookup from '@/components/DnsLookup';

const App = () => {
  return (
    <div>
      <Head>
        <title>DNS Lookup Tool</title>
        <meta
          name="description"
          content="A tool to query DNS records for a domain."
        />
      </Head>
      <DnsLookup />
    </div>
  );
};

export default App;
