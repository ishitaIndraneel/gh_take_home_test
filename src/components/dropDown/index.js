import { useDispatch, useSelector} from 'react-redux'

/** The Dropdown component receives an array of options and a dispatcher 
 * function to handle option selection. 
 * An action is dispatched when an option is selected and the selected value is sent as payload*/
const Dropdown = (props) => {
    const dispatch = useDispatch();
    const { label, options, uponSelection } = props
    const handleChange = (event) => {
        dispatch(uponSelection(event.target.value));
      }

    return (
      <div>
        <select onChange={handleChange}>
         <option value="">Select {label}</option> 
          {options?.map((option) => (
            <option id=" "key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    )}

export default Dropdown