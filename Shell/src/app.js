import React, { Suspense } from 'react';

const Header = React.lazy(() => import('header/Header'));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>header</div>}>
        <Header />
      </Suspense>

      <main style={{ padding: '2rem' }}>
        <h2> Shell</h2>
      </main>
    </div>
  );
};

export default App;