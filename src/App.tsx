import TranslationProvider from '@components/TranslationProvider';
import { ConferenceCreateProvider } from '@context/ConferenceCreateContext';
import { CommsProvider, ThemeProvider } from '@dolbyio/comms-uikit-react';
import { Navigator } from '@src/routes/Navigator';
import React, { useMemo } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, useLocation } from 'react-router-dom';

import './App.module.scss';

const App = () => {
  const location = useLocation();

  const urlToken = useMemo(() => {
    return encodeURIComponent(new URLSearchParams(window.location.search).get('token') || '');
  }, [location]);

  const YOUR_TOKEN = urlToken;

  return (
    <TranslationProvider>
      <ConferenceCreateProvider>
        <CommsProvider
          token={'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJkb2xieS5pbyIsImlhdCI6MTY4MTg2NDEyMywic3ViIjoiZ21sZEhpNmRYVnZyN0RQU1N4Y05ZQT09IiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9DVVNUT01FUiJdLCJ0YXJnZXQiOiJzZXNzaW9uIiwib2lkIjoiNjYwNzlmZjEtNzYxZC00MjQ1LTlmNGMtMzliNzdiM2EyNDg1IiwiYWlkIjoiYjJmMjI3ZGQtZjcxMS00ODYwLWFmNTAtMWJkNzAxYTc5YWE2IiwiYmlkIjoiOGEzNjhjZWU4NzcwMmNhNTAxODc3OTUzODlkZDNmZjAiLCJleHAiOjE2ODE5NTA1MjN9.yfbnwwnGx6PwEtHnH4QlHZeYGUAvh4cGF49WJWwEP46HykH5uhq-Z41LMX2IO_2SY3bGNVRwJXwQf8sp2Ef0FA'} 
          packageUrlPrefix={`${window.location.origin}${
            import.meta.env.BASE_URL
          }assets/wasm`}
        >
          <ThemeProvider
            customThemes={{
              'My Theme': { colors: { white: 'yellow', primary: { 400: 'red' }, secondary: { 400: 'blue' } } },
            }}
          >
            <Navigator />
          </ThemeProvider>
        </CommsProvider>
      </ConferenceCreateProvider>
    </TranslationProvider>
  );
};

const container = document.getElementById('root');
// no-non-null-assertion comes from official react docs
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
