import Paciente from "./Pet"

const PetList = ({pets, setFormPet, deletePet}) => {

    return (
    <div className='md:w-1/2 lg:w-2/5 shadow-2xl rounded-md py-10 px-5 md:h-screen overflow-y-scroll mx-5'>
      {pets && pets.length ?
        (
        <>
          <h2 className='text-xl font-semibold'>Control of pets</h2>
          <p className='text-sm text-gray-400 mt-2 mb-8'>Manage control of your pets</p>
          {pets.map(petMap => (
          <Paciente
            key={petMap.id}
            petMap={petMap}
            setFormPet={setFormPet}
            deletePet={deletePet} 
          />
          ))}
        </>
        ) 
        :(
        <>
          <h2 className='text-xl font-semibold'>No pet registered yet</h2>
          <p className='text-sm text-gray-400 mt-2 mb-8'>What are you waiting for, owner? Register me</p>
        </>
        )}
    </div>
    
  )
}

export default PetList