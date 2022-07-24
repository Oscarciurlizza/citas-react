import { useState, useEffect } from "react"
import Alert from "./Alert";

const Form = ({pets ,setPets, formPet, setFormPet}) => {

  //States - Form
  const [pet, setPet] = useState('');
  const [owner, setOwner] = useState('');
  const [email, setEmail] = useState('');
  const [high, setHigh] = useState('');
  const [symptom, SetSymptom] = useState('');

  //State - Alert
  const [alert, setAlert] = useState(false);

  //UseEffect
  useEffect(() => {
    if(Object.keys(formPet).length > 0) {
      setPet(formPet.pet);
      setOwner(formPet.owner);
      setEmail(formPet.email);
      setHigh(formPet.high);
      SetSymptom(formPet.symptom);
    }
  }, [formPet]);


  //Generacion de ID
  const generateId = () => {
    const date = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    
    return date + random;
  }

  
  const handleSubmit = e => {
    e.preventDefault();

    //Validation Form
    if ([pet, owner, email, high, symptom].includes('')) {
      setAlert(true);
      return;
    } 

    setAlert(false);

    //Object Pet
    const petObject = {
      pet, 
      owner, 
      email, 
      high, 
      symptom,
    }

    if (formPet.id) {
      //Editando registro 
      petObject.id = formPet.id

      const petsActualizados = pets.map(petsState => petsState.id === formPet.id ? petObject : petsState);
      setPets(petsActualizados);
      setFormPet({});

    } else {
      //Toma una copia - y depues agrega el nuevo objeto.
      petObject.id = generateId();
      setPets([...pets, petObject]);
    }

    //Reiniciar el form
    setPet('');
    setOwner('');
    setEmail('');
    setHigh('');
    SetSymptom('');
  }
  return (
    <div className='md:w-1/2 lg:w-2/5 shadow-2xl rounded-md py-10 px-5 mx-5 sm:mb-0 mb-5'>
      <h2 className='text-xl font-semibold'>You'r Pet !</h2>
      <p className='text-sm text-gray-400 mt-2 mb-8'>Complete the following form</p>
      <form
        onSubmit={handleSubmit}>
          {alert && (
            <Alert>
              Hey, your pet needs complete information
            </Alert> )}
        <div className='mb-5'>
          <label className='block font-normal' htmlFor='pet'>
            Pet's name
          </label>
          <input 
            className='border-2 w-full p-2 mt-2 rounded-md' 
            id='pet' type="text" 
            placeholder="The pet's name"
            value={pet}
            onChange={e => setPet(e.target.value)}/>
        </div>
        <div className='mb-5'>
          <label className='block font-normal' htmlFor='owner'>
            Owner name
          </label>
          <input 
            className='border-2 w-full p-2 mt-2 rounded-md' 
            id='owner' 
            type="text" 
            placeholder="Owner's name"
            value={owner}
            onChange={e => setOwner(e.target.value)}/>
        </div>
        <div className='mb-5'>
          <label className='block font-normal' htmlFor='email'>
            Email
          </label>
          <input 
            className='border-2 w-full p-2 mt-2 rounded-md' 
            id='email' 
            type="email" 
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className='mb-5'>
          <label className='block font-normal' htmlFor='high'>
            Discharge date
          </label>
          <input 
            className='border-2 w-full p-2 mt-2 rounded-md' 
            id='high' 
            type="date"
            value={high}
            onChange={e => setHigh(e.target.value)}/>
        </div>
        <div className='mb-5'>
          <label className='block font-normal' htmlFor='symptom'>
            Symptom
          </label>
          <textarea 
            className='border-2 w-full p-2 mt-2 rounded-md' 
            id='symptom' type="date" 
            placeholder='Describe the symptoms'
            value={symptom}
            onChange={e => SetSymptom(e.target.value)}/>
        </div>
        <input 
          className='bg-blue-400 mt-10 font-semibold w-full text-white p-3 hover:bg-blue-600 transition-colors cursor-pointer' 
          type="submit" 
          value={formPet.id ? 'Edit Pet' : 'Add Pet'}/>
      </form>
    </div>
  )
}

export default Form