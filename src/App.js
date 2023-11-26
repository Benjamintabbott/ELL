import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const Home = lazy(() => import('./Pages/Home'));
const Scene1 = lazy(() => import('./Pages/Scene1'));
const Scene2 = lazy(() => import('./Pages/Scene2'));
const Scene3 = lazy(() => import('./Pages/Scene3'));
const Scene4 = lazy(() => import('./Pages/Scene4'));
const Scene5 = lazy(() => import('./Pages/Scene5'));
const Scene6 = lazy(() => import('./Pages/Scene6'));


const App = () => {
  return (
    <>
    <BrowserRouter>
    <Suspense fallback={<div className="container">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Scene1" element={<Scene1 />} />
        <Route path="/Scene2" element={<Scene2 />} />
        <Route path="/Scene3" element={<Scene3 />} />
        <Route path="/Scene4" element={<Scene4 />} />
        <Route path="/Scene5" element={<Scene5 />} />
        <Route path="/Scene6" element={<Scene6 />} />
      </Routes>
    </Suspense>
    </BrowserRouter>
    </>
  );
};

export default App;