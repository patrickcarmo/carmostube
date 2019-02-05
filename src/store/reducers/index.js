import { combineReducers } from 'redux';

import busca from './busca-videos';
import reproduz from './reproduz-video'


const rootReducer = combineReducers({
	busca,
	reproduz
});

export default rootReducer;