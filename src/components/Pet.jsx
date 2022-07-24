
const Pet = ({petMap, setFormPet, deletePet}) => {

  const {pet, owner, email, high, symptom, id} = petMap;

  const handleEliminar = () => {
    const response = confirm('Want to delete this record?')

    if (response) {
      deletePet(id);
    }
  }
  
  return (
    <div className='border-2 rounded-xl py-5 px-5 mb-5'>
      <p className='font-semibold mb-5'>Pet: {""}
        <span className='font-normal'>{pet}</span>
      </p>
      <p className='font-semibold mb-5'>Owner: {""}
        <span className='font-normal'>{owner}</span>
      </p>
      <p className='font-semibold mb-5'>Email: {""}
        <span className='font-normal'>{email}</span>
      </p>
      <p className='font-semibold mb-5'>High: {""}
        <span className='font-normal'>{high}</span>
      </p>
      <p className='font-semibold mb-5'>Symptom: {""}
        <span className='font-normal'>{symptom}</span>
      </p>
      <div className='flex justify-between mt-10'>
        <button 
          className='py-2 px-10 bg-blue-400 text-white font-semibold hover:bg-blue-600 transition-colors cursor-pointer' 
          type='button'
          onClick={() => setFormPet(petMap)}>
            Edit
        </button>
        <button 
          className='py-2 px-10 bg-red-400 text-white font-semibold hover:bg-red-600 transition-colors cursor-pointer' 
          type='button'
          onClick={handleEliminar}>
            Delete
        </button>
      </div>
    </div>
  )
}

export default Pet