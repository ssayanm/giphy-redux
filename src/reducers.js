import {
	CHANGE_SEARCH_FIELD,
	REQUEST_GIFS_PENDING,
	REQUEST_GIFS_SUCCESS,
	REQUEST_GIFS_FAILED,
} from './constants'; 

const initialStateSearch = {
	searchField:'',
	gifs: []
}

export const searchGifs = (state=initialStateSearch, action={}) => {
	switch(action.type){
		case CHANGE_SEARCH_FIELD:
			return Object.assign({}, state, {searchField: action.payload})
		default:
			return state;
	}
}

const initialStateGifs = {
	isPending: false,
	fgifs: [],
	error:''
}

export const requestGifs = (state=initialStateGifs, action={}) => {
	switch(action.type){
		case REQUEST_GIFS_PENDING:
			return Object.assign({}, state, {isPending: true})
		case REQUEST_GIFS_SUCCESS:
			return Object.assign({}, state, {fgifs: action.payload, isPending: false})
		case REQUEST_GIFS_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false})
		default:
			return state;
	}
}