const Button = ({ type }) => {
    const handleClick = () => {
        console.log("clicked");
    }
	return (
		<button onClick={handleClick} className="bg-transparent  border border-gray-400 flex justify-center items-center px-5">
			<span>{type}</span>
		</button>
	);
};
export default Button;
