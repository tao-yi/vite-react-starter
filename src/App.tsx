import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import './scss/main.scss';

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function WrappedApp() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export default WrappedApp;
