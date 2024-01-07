import React from 'react';
import Carte from './Carte';
import Programmation from './Programmation';
import { Link } from 'react-router-dom';

const Accueil = () => {
 return (
// =========== Section Accueil ================ //
 <div className='accueil-container'>
 <h1 className="mt-4 mb-3 ">Bienvenue sur Live Events</h1>
 <p>
 Découvrez le meilleur de la musique et des spectacles avec Live Events. 
Consultez la programmation, explorez la carte du festival, achetez vos billets et 
suivez-nous sur les réseaux sociaux pour ne rien manquer !
 </p>
 {/* ============ section listes des concerts=========== */}
 <div className='listConcerts'>
    <div>
    <img  className='imgAccueil'src="./images/MOOKOK 1981 (4).png" alt="Logo MOOKOK 1981" />
    </div>
 <div className='listText'>
 <h2>
 Groupe 1 scène principale - 18h
 </h2>
 </div>
 </div>

 <div className='listConcerts'>
    <div>
    <img  className='imgAccueil'src="./images/mookok2.png" alt="Logo MOOKOK 1981" />
    </div>
 <div className='listText'>
 <h2 >
 Groupe 2 scène principale - 19h
 </h2>
 </div>
 </div>

 <div className='listConcerts'>
    <div>
    <img  className='imgAccueil'src="./images/mookok3.png" alt="Logo MOOKOK 1981" />
    </div>
 <div className='listText'>
 <h2 >
 Groupe 3 scène principale - 20h
 </h2>
 </div>
 </div>
{/* =========== fin de la section concerts============== */}

{/* Zone Billetterie */}
<div>
        <Link to="/billetterie">
          <button className='buttonBillet'>BILLETTERIE</button>
        </Link>
      </div>
{/* ================= */}

{/* Carte interactive */}
<Carte />
 {/* ============== */}

{/* section programmation */}
 <Programmation />
{/* ====================== */}
 </div>
 


 );
};
export default Accueil;