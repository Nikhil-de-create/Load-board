import React from 'react';
import { AuthProvider } from './src/state/auth';
import Navigation from './src/navigation';

const App = () => {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  );
};

export default App;
