import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Accueil from './components/Accueil';
import Programmation from './components/Programmation';
import Concerts from './components/Concerts';
import Carte from './components/Carte';
import InformationsPratiques from './components/InformationsPratiques';
import Billetterie from './components/Billetterie';
import ReseauxSociaux from './components/ReseauxSociaux';
import Partenaires from './components/Partenaires';
import Faq from './components/Faq';
import './App.css';

const App = () => {
  return (
  <Router>
  <div>
  <Menu />
  <div className="container mt-3">
  <Routes>
  <Route path="/programmation" element={<Programmation />} />
  <Route path="/concerts" element={<Concerts />} />
  <Route path="/carte" element={<Carte />} />
  <Route path="/informationspratiques" element={<InformationsPratiques />} />
  <Route path="/billetterie" element={<Billetterie />} />
  <Route path="/reseauxsociaux" element={<ReseauxSociaux />} />
  <Route path="/" element={<Accueil />} />
  <Route path="/partenaires" element={<Partenaires />} />
  <Route path="/faq" element={<Faq />} />
  </Routes>
  </div>
  </div>
  </Router>
  );
 };
 export default App;