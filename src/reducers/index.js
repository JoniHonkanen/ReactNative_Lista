import { combineReducers } from 'redux';

import LibraryReducer from './libraryReducer';
import SelectionReducer from './selectionReducer';

export default combineReducers({
    libaries: LibraryReducer,
    selectedLibraryId: SelectionReducer
});