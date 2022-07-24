import { useState, useEffect } from "react";
import Form from "./components/Form";
import PetList from "./components/PetList";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import './App.css';

const App = () => {

  const [pets, setPets] = useState(JSON.parse(localStorage.getItem('pets')) ?? []);

  //Editar formulario
  const [formPet, setFormPet] = useState({});

  useEffect(() => {
    localStorage.setItem('pets', JSON.stringify(pets));
  }, [pets])

  const deletePet = id => {
    const petsActualizados = pets.filter(pet => pet.id !== id);
    
    setPets(petsActualizados);
  }

  return (
    <div className='mx-auto'>
      <Hero />
      <div className='md:flex justify-center justify-items-center pt-10 pb-20'>
        <Form
          pets={pets}
          setPets={setPets}
          formPet={formPet}
          setFormPet={setFormPet} />
        <PetList
          pets={pets}
          setFormPet={setFormPet}
          deletePet={deletePet}
           />
      </div>
      <Footer />
    </div>
    
  )
}

export default App;
