import { useDispatch } from 'react-redux';
import { handleChange } from '../redux/slices/gradientValues';

const Color = ({ value, id }) => {
	// console.log(id)
	const dispatch = useDispatch();
	return (
		<input
			type="color"
			name="color"
			value={value}
			onChange={(e) => dispatch(handleChange({ id, color: e.target.value }))}
			className="outline-none border-none bg-transparent h-16 w-16 cursor-pointer"
		/>
	);
};
export default Color;
