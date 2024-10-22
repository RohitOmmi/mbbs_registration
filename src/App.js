
import './App.css';
import About from './Componets/About';
import AcademicDifferents from './Componets/AcademicDifferents';
import FearlessHeart from './Componets/FearlessHeart';
import FeeStructure from './Componets/FeeStructure';
import GimsrExperiences from './Componets/GimsrExperiences';
import Header from './Componets/Header';
import HowToChooseGimsr from './Componets/HowToChooseGimsr';
import KeyHighlights from './Componets/KeyHighlights';
import LifeOnCampus from './Componets/LifeOnCampus';
import MbbsAdmission from './Componets/MbbsAdmission';
import MeritScholars from './Componets/MeritScholars';
import Slider from './Componets/Slider';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Slider />
      <About />
      <KeyHighlights/>
      <MbbsAdmission/>
      <FeeStructure/>
      <MeritScholars/>
      <HowToChooseGimsr/>
      <AcademicDifferents/>
      <GimsrExperiences/>
      <FearlessHeart/>
      <LifeOnCampus/>
      <Footer/>
    </>
  );
}

export default App;
