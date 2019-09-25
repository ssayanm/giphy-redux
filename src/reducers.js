import {
	REQUEST_GIFS_PENDING,
	REQUEST_GIFS_SUCCESS,
	REQUEST_GIFS_FAILED,
} from './constants'; 

const initialStateGifs = {
	isPending: false,
	gifs: [],
	error:''
}

export const searchGifs = (state=initialStateGifs, action={}) => {
	switch(action.type){
		case REQUEST_GIFS_PENDING:
			return Object.assign({}, state, {isPending: true})
		case REQUEST_GIFS_SUCCESS:
			return Object.assign({}, state, {gifs: action.payload, isPending: false})
		case REQUEST_GIFS_FAILED:
			return Object.assign({}, state, {error: action.payload, isPending: false})
		default:
			return state;
	}
}