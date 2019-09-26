import {
	REQUEST_GIFS_PENDING,
	REQUEST_GIFS_SUCCESS,
	REQUEST_GIFS_FAILED,
	API_URL,
	API_KEY,
	LIMIT,
	DEFAULT_QUERY 
} from './constants'; 

// export const setSearchField = text => dispatch => {
//   dispatch({ type: REQUEST_GIFS_PENDING });
//   fetch(API_URL + (text || DEFAULT_QUERY) + API_KEY + LIMIT)
//     .then(response => response.json())
//     .then(items =>
//       dispatch({ type: REQUEST_GIFS_SUCCESS, payload: items.data })
//     )
//     .catch(error => dispatch({ type: REQUEST_GIFS_FAILED, payload: error }));
// };

export const setSearchField = text => async (dispatch) => {
  dispatch({ type: REQUEST_GIFS_PENDING });
  try {
    const response = await fetch(API_URL + (text || DEFAULT_QUERY) + API_KEY + LIMIT);
    const items = await response.json();
    dispatch({ type: REQUEST_GIFS_SUCCESS, payload: items.data })
  } catch (error) {
    dispatch({ type: REQUEST_GIFS_FAILED, payload: error })
  }
}
