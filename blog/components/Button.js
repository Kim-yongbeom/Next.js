const Button = ({ children }) => {
  return (
    <button
      className="bg-slate-700 text-teal-200 dark:bg-white dark:text-teal-700 text-lg rounded-lg px-5"
      onClick={() => alert(`thanks to ${children}`)}
    >
      {children}
    </button>
  )
}

export default Button
