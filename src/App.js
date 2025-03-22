import { lazy, Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';

const Home = lazy(() => import('./Pages/Home'));
const Kitchen = lazy(() => import('./Pages/Kitchen'));
const Bathroom = lazy(() => import('./Pages/Bathroom'));
const Classroom = lazy(() => import('./Pages/Classroom'));
const Backyard = lazy(() => import('./Pages/Backyard'));



const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Header />
      <Suspense fallback={<div className="container">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kitchen" element={<Kitchen />} />
          <Route path="/bathroom" element={<Bathroom />} />
          <Route path="/classroom" element={<Classroom />} />
          <Route path="/backyard" element={<Backyard />} />
        </Routes>
      </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;