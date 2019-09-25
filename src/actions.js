import {
	CHANGE_SEARCH_FIELD,
	REQUEST_GIFS_PENDING,
	REQUEST_GIFS_SUCCESS,
	REQUEST_GIFS_FAILED,
	API_URL,
	API_KEY,
	LIMIT,
	DEFAULT_QUERY 
} from './constants'; 

// export const setSearchField = (text) => ({
// 	type: CHANGE_SEARCH_FIELD,
// 	payload: text
// })
export const setSearchField = text => dispatch => {
  dispatch({ type: REQUEST_GIFS_PENDING });
  fetch(API_URL + text + API_KEY + LIMIT)
    .then(response => response.json())
    .then(items =>
      dispatch({ type: REQUEST_GIFS_SUCCESS, payload: items.data })
    )
    .catch(error => dispatch({ type: REQUEST_GIFS_FAILED, payload: error }));
};

export const requestGifs = () => (dispatch) => {
	dispatch({ type:REQUEST_GIFS_PENDING });
	fetch(API_URL + DEFAULT_QUERY + API_KEY + LIMIT)
    	.then(response => response.json())
    	.then(items => dispatch({ type: REQUEST_GIFS_SUCCESS, payload:items.data}))
    	//.fetch(API_URL + dispatch. + API_KEY + LIMIT)
    	.catch(error => dispatch({ type: REQUEST_GIFS_FAILED, payload: error}))
}