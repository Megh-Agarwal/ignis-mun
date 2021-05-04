import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DocumentMeta from 'react-document-meta';

const meta = {
  title: 'IGNIS Model United Nations',
  description: 'IGNIS MUN brings a brand new platform for student leaders across the country.',
  canonical: 'https://ignismun.in/',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'ignis,mun,ignismun,ignis model united nations'
    }
  }
};

const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <DocumentMeta {...meta}>
          <App />
      </DocumentMeta>
    </QueryClientProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
