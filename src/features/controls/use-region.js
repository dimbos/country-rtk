import { useSelector, useDispatch } from 'react-redux';
import { selectRegion, setRegion } from './controls-slice';


export const useRegion = () => {

    const dispatch = useDispatch();
    const region = useSelector(selectRegion);

    const handleselect = (region) => {
        dispatch(setRegion(region?.value || ''));
    }   

    return [region, handleselect];

}