import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Security, LoginCallback } from '@okta/okta-react'

function App() {
  const config = {
    issuer: 'https://${https://dev-861398.okta.com}/oauth2/default',
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: '{0oaayl2ctfmraSx404x6}',
    pkce: true
  }
  
  return (
    <Security {...config}>
      <div>
      
      </div>
    </Security>
  );
}

export default App;
