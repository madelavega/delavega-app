import { combineReducers } from 'redux';
import dateSelector from './DateSelector/reducer';
import euroJackpotResults from './EuroJackpotResults/reducer';

export default combineReducers({
    dateSelector,
    euroJackpotResults,
});