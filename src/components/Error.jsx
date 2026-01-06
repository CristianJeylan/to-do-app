const Error = ({children}) => {
  return (
    <div className="p-2 bg-red-700 font-bold text-white font-mono rounded-md shadow-md mb-1 transition-all">
      {children}     
    </div>
  )
}

export default Error
