import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchData } from './searchActions';
import axios from 'axios';

function SearchComponent() {
  const dispatch = useDispatch();
  const searchData = useSelector((state) => state.search);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch(setSearchData({ [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get('/api/search', { params: searchData });
      // Handle the response from the backend
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="anyWords"
        value={searchData.anyWords}
        onChange={handleInputChange}
        placeholder="Any words"
      />
      <input
        type="text"
        name="noneOfWords"
        value={searchData.noneOfWords}
        onChange={handleInputChange}
        placeholder="None of words"
      />
      <input
        type="text"
        name="anyOfWords"
        value={searchData.anyOfWords}
        onChange={handleInputChange}
        placeholder="Any of words"
      />
      <input
        type="text"
        name="exactWords"
        value={searchData.exactWords}
        onChange={handleInputChange}
        placeholder="Exact words"
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchComponent;



// store.js
// import { createStore, combineReducers } from 'redux';
// import searchReducer from './searchReducer';

// const rootReducer = combineReducers({
//   search: searchReducer,
// });

// const store = createStore(rootReducer);

// export default store;

// searchreducer.js
// searchReducer.js
// const initialState = {
//   anyWords: '',
//   noneOfWords: '',
//   anyOfWords: '',
//   exactWords: '',
// };

// const searchReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'SET_SEARCH_DATA':
//       return {
//         ...state,
//         ...action.payload,
//       };
//     default:
//       return state;
//   }
// };

// export default searchReducer;

// searchaction.js
// searchActions.js
// export const setSearchData = (searchData) => ({
//   type: 'SET_SEARCH_DATA',
//   payload: searchData,
// });


