

const Button = ({btnText}) => {
  return (
    <div className="h-auto w-fit px-4 py-2 transform transition-colors duration-300 hover:cursor-pointer hover:bg-sky-700 bg-sky-500 rounded-full">{btnText?btnText:'Button'}</div>
  )
}

export default Button