import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActionCreators from '../store/action-creators/counter';

export const useActions = () => {
    const dispatch = useDispatch();

    return bindActionCreators(CounterActionCreators, dispatch);
};
