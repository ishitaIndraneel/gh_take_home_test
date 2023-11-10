import { useDispatch, useSelector} from 'react-redux'
import { changeCriteria, selectCriteria, changeYear, changeHomeOwnership, changeQuarter, changeTerm, reset, setData} from '../../features/aggregate/reducer'
import { useEffect } from 'react';
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
          {options?.map((option, index) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    )}

export default Dropdown