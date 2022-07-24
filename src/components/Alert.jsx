
const Alert = ({children}) => {
  return (
    <div className='mb-5'>
      <p className='text-red-500 font-semibold'>{children}</p>
    </div>
  )
}

export default Alert