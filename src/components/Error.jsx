const Error = ({children}) => {
  return (
    <div>
        <span className="text-red-600 ml-1 text-sm font-mono">{children}</span>
    </div>
  )
}

export default Error
