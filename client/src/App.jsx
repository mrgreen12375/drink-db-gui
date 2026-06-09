import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import GetNav from './components/GetNav';
import UpdateNav from './components/UpdateNav';
import DeleteNav from './components/DeleteNav';
import LandingPage from './components/LandingPage';
import Cocktails from './components/Cocktails';
import CocktailById from './components/CocktailById';
import CocktailByName from './components/CocktailByName';
import CreateCocktail from './components/CreateCocktail';
import UpdateCocktail from './components/UpdateCocktail';
import DeleteCocktail from './components/DeleteCocktail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/get" element={<GetNav />} />
        <Route path="/get/id" element={<CocktailById />} />
        <Route path="/get/name" element={<CocktailByName />} />
        <Route path="/put" element={<UpdateNav />} />
        <Route path="/get/all" element={<Cocktails />} />
        <Route path="/post" element={<CreateCocktail />} />
        <Route path="/put/id" element={<UpdateCocktail />} />
        <Route path="/delete" element={<DeleteNav />} />
        <Route path="/delete/id" element={<DeleteCocktail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
