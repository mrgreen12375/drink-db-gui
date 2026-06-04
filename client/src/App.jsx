import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Nav from './components/Nav';
import Landing from './components/Landing';
import CocktailsAll from './components/Cocktails';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Nav />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/get" element={<CocktailsAll />} />
        {/* <Route path="/post" element={<CreateCocktail />} />
        <Route path="/put" element={<UpdateCocktail />} />
        <Route path="/delete" element={<DeleteCocktail />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
