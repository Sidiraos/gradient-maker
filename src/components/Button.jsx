import { useDispatch , useSelector} from 'react-redux';
import { addColor } from '../redux/slices/gradientValues';
import { removeColor } from '../redux/slices/gradientValues';
import { randomHexColor } from 'random-hex-color-generator';
import { v4 as uuidv4 } from 'uuid';

const Button = ({ type , selectedColorId , setSelectedId }) => {
	const dispatch = useDispatch();
    const colors = useSelector((state) => state.gradientValues.colors);
    const position = colors[colors.length -1].position + 5.5;
    // console.log(position)
    // console.log(selectedColorId)
    // console.log(colors[colors.length-1].id)
	const handleClick = () => {
		if (type === '+') {
            if(colors.length < 5){
                dispatch(
                    addColor({
                        id: uuidv4(),
                        color: randomHexColor(),
                        position,
                    })
                );
            }
		} else if (type === '-') {
			if(colors.length > 2){
                if(selectedColorId === colors[colors.length-1].id){
                    // console.log("on ne peut pas supprimer la couleur courante")
                    // console.log("id courant" , colors[colors.length-1].id)
                    const currentID = colors[colors.length-2].id
                    // console.log("id precedent" , currentID)
                    setSelectedId(currentID)
                    dispatch(removeColor());

                } else {
                    dispatch(removeColor());

                }
            }
		}
	};
	return (
		<button
			onClick={handleClick}
			className="bg-transparent  border border-gray-400 flex justify-center items-center px-5"
		>
			<span>{type}</span>
		</button>
	);
};
export default Button;
