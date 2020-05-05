import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import { Security, LoginCallback } from '@okta/okta-react'

import LogButton from './components/LogButton'

function App() {
  const config = {
    issuer: 'https://dev-861398.okta.com/oauth2/default',
    redirectUri: window.location.origin + '/implicit/callback',
    clientId: '{0oaayl2ctfmraSx404x6}',
    pkce: true
  }

  return (
    <Security {...config}>
      <Route exact path='/' component={LogButton} />
      <Route path='/implicit/callback' component={LoginCallback} />
    </Security>
  );
}

export default App;
