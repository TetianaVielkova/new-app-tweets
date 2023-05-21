import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Loader } from './components/Loader/Loader';

const HomePage = lazy(() => import('./pages/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage/TweetsPage'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/tweets" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />/
      </Routes>
    </Suspense>
  );
}

export default App;
