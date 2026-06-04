import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import LandingPage from './components/LandingPage';
import Cocktails from './components/Cocktails';
import CreateCocktail from './components/CreateCocktail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get" element={<Cocktails />} />
        <Route path="/post" element={<CreateCocktail />} />
        {/* <Route path="/put" element={<UpdateCocktail />} />
        <Route path="/delete" element={<DeleteCocktail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
