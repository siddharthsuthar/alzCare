import * as AT from './types';
import $ from 'jquery';

export function fetchPublicPhotos(term = ''){

	return (dispatch) => {
		$.ajax({
		  url: `http://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?&tags=${term}`,
		  dataType: 'jsonp'
		}).then((data) => {
			dispatch({type: AT.FETCH_IMAGES, payload: data})
		})
	}
}