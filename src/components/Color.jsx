const Color = ({value}) => {
  return (
    <input type="color" name="color" value={value} onChange={(e) => console.log(e.target.value)} className="outline-none border-none bg-transparent h-16 w-16 cursor-pointer" />
  )
}
export default Color