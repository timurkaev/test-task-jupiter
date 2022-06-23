import React from 'react';
import Header from './components/Header';
import Portfolio from './components/Portfolio';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <main className='main'>
        <Portfolio />
      </main>
    </div>
  );
};

export default App;
